from django.db.models import Count
from elections.models import (
    Vote,
    Candidate,
    Party,
    FPTPResult,
    PRResult
)

# ------------------------------
# FPTP Seat Allocation
# ------------------------------
def allocate_fptp_seats():
    """
    Winner-takes-all per electoral area.
    """
    results = []

    for candidate in Candidate.objects.all():
        votes = Vote.objects.filter(
            vote_type="FPTP",
            candidate=candidate
        ).count()

        if votes == 0:
            continue

        results.append((candidate, votes))

    # Group by electoral area
    area_map = {}
    for candidate, votes in results:
        area = candidate.electoral_area
        area_map.setdefault(area, []).append((candidate, votes))

    # Pick winners
    for area, candidates in area_map.items():
        winner, vote_count = max(candidates, key=lambda x: x[1])

        FPTPResult.objects.update_or_create(
            electoral_area=area,
            defaults={
                "winner": winner,
                "total_votes": vote_count
            }
        )


# ------------------------------
# PR Seat Allocation
# ------------------------------
def allocate_pr_seats(total_pr_seats=110):
    """
    Proportional representation using simple quota method.
    """
    PRResult.objects.all().delete()

    party_votes = (
        Vote.objects
        .filter(vote_type="PR")
        .values("party")
        .annotate(total=Count("id"))
    )

    total_votes = sum(p["total"] for p in party_votes)

    if total_votes == 0:
        return

    quota = total_votes / total_pr_seats

    for p in party_votes:
        seats = int(p["total"] / quota)

        PRResult.objects.create(
            party=Party.objects.get(id=p["party"]),
            total_votes=p["total"],
            seats_allocated=seats
        )