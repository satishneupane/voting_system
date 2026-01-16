from django.http import JsonResponse, HttpResponse
from .models import District, Candidate, Party, Vote, User, ElectoralArea, Province
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from elections.services.vote_permissions import (
    validate_user_profile,
    validate_candidate_access,
    VotePermissionError,
)
from elections.services.vote_permissions import VotePermissionError
from elections.services.vote_submission import (
    submit_candidate_vote,
    submit_party_vote,
    VoteSubmissionError,
)
from elections.services.vote_visibility import (
    get_voting_context_for_user,
    VoteVisibilityError,
)
from django.contrib.admin.views.decorators import staff_member_required
from elections.services.results import fptp_results, pr_results
from elections.models import ElectionControl
from django.db.models import Count
from .utils import fptp_winners, pr_seat_allocation

def districts_by_province(request): 
    province_id = request.GET.get('province_id') # matches the GET param from JS
    districts = []
    if province_id:
        districts = District.objects.filter(province_id=province_id).values('id', 'name')
        districts_list = list(districts)  # convert queryset to list of dicts
    else:
        districts_list = []
    return JsonResponse(districts_list, safe=False)

def home(request):
    return HttpResponse("Welcome to Voting System!")

def validate_user_area(user, province, district, electoral_area=None):
    #Ensure the user votes only in their own region
    if user.province_id != province.id:
        return False, "Invalid province"
    if user.district_id != district.id:
        return False, "Invalid district"
    if electoral_area and user.electoral_area_id != electoral_area.id:
        return False, "Invalid electoral area"
    return True, None

#___________Candidate vote logic_______________
@login_required
@require_POST
def submit_candidate_vote(request):
    user = request.user
    candidate_id = request.POST.get("candidate_id")

    if not candidate_id:
        return JsonResponse({"error": "candidate_id is required"}, status=400)

    try:
        candidate = Candidate.objects.select_related(
            "electoral_area__district__province"
        ).get(id=candidate_id)
    except Candidate.DoesNotExist:
        return JsonResponse({"error": "Invalid candidate"}, status=400)

    valid, error = validate_user_area(
        user,
        candidate.electoral_area.province,
        candidate.electoral_area.district,
        candidate.electoral_area,
    )

    if not valid:
        return JsonResponse({"error": error}, status=403)

    if Vote.objects.filter(voter=user, vote_type="FPTP").exists():
        return JsonResponse(
            {"error": "Candidate vote already submitted"}, status=409
        )

    Vote.objects.create(
        voter=user,
        vote_type="FPTP",
        candidate=candidate,
        province=user.province,
        district=user.district,
        electoral_area=user.electoral_area,
    )

    return JsonResponse({"success": "Candidate vote recorded"})

#_______________Part vote logic_______________
@login_required
@require_POST
def submit_party_vote(request):
    user = request.user
    party_id = request.POST.get("party_id")

    if not party_id:
        return JsonResponse({"error": "party_id is required"}, status=400)

    try:
        party = Party.objects.get(id=party_id)
    except Party.DoesNotExist:
        return JsonResponse({"error": "Invalid party"}, status=400)

    if Vote.objects.filter(voter=user, vote_type="PR").exists():
        return JsonResponse(
            {"error": "Party vote already submitted"}, status=409
        )

    Vote.objects.create(
        voter=user,
        vote_type="PR",
        party=party,
        province=user.province,
        district=user.district,
    )

    return JsonResponse({"success": "Party vote recorded"})

# ------------------------------
# Utility: Check voting status
# ------------------------------
def is_voting_open():
    """
    Returns True if voting is currently open.
    """
    control = ElectionControl.objects.first()
    return bool(control and control.is_voting_open)


# ------------------------------
# Vote Submission API
# ------------------------------
@require_POST
def submit_vote(request):
    """
    Backend API to submit a vote.

    Expects POST data:
    {
        "vote_type": "FPTP" or "PR",
        "candidate_id": <id>,  # required if FPTP
        "party_id": <id>,      # required if PR
    }
    """

    user = request.user

    # 1. Voting lock check
    if not is_voting_open():
        return JsonResponse(
            {"error": "Voting is currently closed."},
            status=403
        )

    # 2. Authentication check
    if not user.is_authenticated:
        return JsonResponse(
            {"error": "Authentication required."},
            status=401
        )

    # 3. Prevent double voting
    if hasattr(user, "vote"):
        return JsonResponse(
            {"error": "You have already voted."},
            status=400
        )

    # 4. Validate vote type
    vote_type = request.POST.get("vote_type")
    if vote_type not in ("FPTP", "PR"):
        return JsonResponse(
            {"error": "Invalid vote type."},
            status=400
        )

    # 5. Create vote object (location locked to user)
    vote = Vote(
        voter=user,
        vote_type=vote_type,
        province=user.province,
        district=user.district,
        electoral_area=user.electoral_area,
    )

    # ------------------------------
    # FPTP Vote (Candidate-based)
    # ------------------------------
    if vote_type == "FPTP":
        candidate_id = request.POST.get("candidate_id")
        if not candidate_id:
            return JsonResponse(
                {"error": "candidate_id is required for FPTP vote."},
                status=400
            )

        candidate = get_object_or_404(Candidate, id=candidate_id)

        # Enforce electoral-area restriction
        if candidate.electoral_area != user.electoral_area:
            return JsonResponse(
                {"error": "Candidate is not in your electoral area."},
                status=403
            )

        vote.candidate = candidate

    # ------------------------------
    # PR Vote (Party-based)
    # ------------------------------
    elif vote_type == "PR":
        party_id = request.POST.get("party_id")
        if not party_id:
            return JsonResponse(
                {"error": "party_id is required for PR vote."},
                status=400
            )

        party = get_object_or_404(Party, id=party_id)
        vote.party = party

    # 6. Save vote
    vote.save()

    return JsonResponse(
        {"success": "Vote recorded successfully."},
        status=201
    )

#____________Candidate Listing________________

@login_required
def get_candidates(request):
    """
    Returns candidates in the user's electoral area.
    """
    user = request.user
    if not user.electoral_area:
        return JsonResponse({"error": "User has no electoral area assigned."}, status=400)

    candidates = user.electoral_area.candidates.all().values("id", "name")
    return JsonResponse(list(candidates), safe=False)

#____________Party Listing____________

def get_parties(request):
    """
    Returns all active parties (PR voting).
    """
    parties = Party.objects.filter(is_active=True).values("id", "name", "symbol")
    return JsonResponse(list(parties), safe=False)

#____________Temperorary Test View____________
@login_required
def test_candidate_validation(request):
    """
    TEMPORARY TEST ENDPOINT

    This endpoint is ONLY for verifying backend logic.
    It does NOT save any vote.
    """
    candidate_id = request.GET.get("candidate_id")

    try:
        validate_user_profile(request.user)
        validate_candidate_access(request.user, candidate_id)

        return JsonResponse({
            "status": "success",
            "message": "User is allowed to vote for this candidate"
        })

    except VotePermissionError as e:
        return JsonResponse({
            "status": "error",
            "message": str(e)
        }, status=403)
    
#__________Temporary Vote Error__________

@login_required
def test_submit_candidate_vote(request):
    """
    TEMP TEST ENDPOINT — Candidate Vote
    """
    candidate_id = request.GET.get("candidate_id")

    try:
        vote = submit_candidate_vote(request.user, candidate_id)
        return JsonResponse({
            "status": "success",
            "vote_id": vote.id,
            "type": vote.vote_type
        })

    except (VoteSubmissionError, VotePermissionError) as e:
        return JsonResponse({"error": str(e)}, status=403)


@login_required
def test_submit_party_vote(request):
    """
    TEMP TEST ENDPOINT — Party Vote
    """
    party_id = request.GET.get("party_id")

    try:
        vote = submit_party_vote(request.user, party_id)
        return JsonResponse({
            "status": "success",
            "vote_id": vote.id,
            "type": vote.vote_type
        })

    except (VoteSubmissionError, VotePermissionError) as e:
        return JsonResponse({"error": str(e)}, status=403)
    
#_______Temperorary vote visibilty test_______

@login_required
def voting_context(request):
    """
    TEMP endpoint to fetch voting context for logged-in user
    """
    try:
        context = get_voting_context_for_user(request.user)
        return JsonResponse(context)

    except VoteVisibilityError as e:
        return JsonResponse({"error": str(e)}, status=403)
    
#___________Results View_____________

@staff_member_required
def fptp_results_view(request):
    return JsonResponse({"results": fptp_results()})


@staff_member_required
def pr_results_view(request):
    return JsonResponse({"results": list(pr_results())})

# ------------------------------
# FPTP Vote Counts per Candidate
# ------------------------------
def fptp_votes_summary(request):
    """
    Returns total FPTP votes per candidate, optionally filtered by province/district/EA
    GET params (optional): province_id, district_id, electoral_area_id
    """
    votes = Vote.objects.filter(vote_type='FPTP')
    
    # Optional filtering
    province_id = request.GET.get('province_id')
    district_id = request.GET.get('district_id')
    ea_id = request.GET.get('electoral_area_id')
    
    if province_id:
        votes = votes.filter(province_id=province_id)
    if district_id:
        votes = votes.filter(district_id=district_id)
    if ea_id:
        votes = votes.filter(electoral_area_id=ea_id)

    summary = votes.values('candidate__id', 'candidate__name', 'electoral_area__name').annotate(total_votes=Count('id'))
    
    return JsonResponse(list(summary), safe=False)


# ------------------------------
# PR Vote Counts per Party
# ------------------------------
def pr_votes_summary(request):
    """
    Returns total PR votes per party, optionally filtered by province/district
    GET params (optional): province_id, district_id
    """
    votes = Vote.objects.filter(vote_type='PR')
    
    province_id = request.GET.get('province_id')
    district_id = request.GET.get('district_id')
    
    if province_id:
        votes = votes.filter(province_id=province_id)
    if district_id:
        votes = votes.filter(district_id=district_id)
    
    summary = votes.values('party__id', 'party__name').annotate(total_votes=Count('id'))
    
    return JsonResponse(list(summary), safe=False)


# ------------------------------
# Overall Vote Breakdown
# ------------------------------
def votes_breakdown(request):
    """
    Returns total votes by type
    """
    fptp_count = Vote.objects.filter(vote_type='FPTP').count()
    pr_count = Vote.objects.filter(vote_type='PR').count()
    
    return JsonResponse({
        "FPTP": fptp_count,
        "PR": pr_count,
        "Total": fptp_count + pr_count
    })
#Admin vote viewing and monitoring

def seats_summary(request):
    """
    Returns both FPTP winners and PR seat allocations
    """
    fptp = fptp_winners()
    pr = pr_seat_allocation(total_seats=110)  # you can adjust total PR seats

    return JsonResponse({
        "fptp_winners": fptp,
        "pr_seats": pr
    })
