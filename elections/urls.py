from django.urls import path
from . import views  # Only import your single views.py

urlpatterns = [
    # -------- API endpoints --------
    path("api/voter/profile/", views.voter_profile, name="voter-profile"),
    path("api/candidates/", views.candidate_list, name="candidate-list"),
    path("api/parties/", views.party_list, name="party-list"),

    # -------- Voting --------
    path("vote/submit/", views.submit_vote, name="submit-vote"),

    # -------- AJAX helpers --------
    path("ajax/districts-by-province/", views.districts_by_province, name="districts-by-province"),
]

# -------- Results / Monitoring --------
urlpatterns += [
    path("results/candidates/", views.candidate_vote_results, name="candidate-results"),
    path("results/parties/", views.party_vote_results, name="party-results"),
    path("results/summary/", views.voting_summary, name="voting-summary"),
    path("results/province/", views.votes_by_province, name="votes-by-province"),
    path("results/district/", views.votes_by_district, name="votes-by-district"),
]
#test_submit_candidate_vote
#test_submit_party_vote
#test_candidate_validation
