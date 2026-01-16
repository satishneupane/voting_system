from django.urls import path
from . import views_api, views, views_results

urlpatterns = [
    # -------- API endpoints --------
    path("api/voter/profile/", views_api.voter_profile, name="voter-profile"),
    path("api/candidates/", views_api.candidate_list, name="candidate-list"),
    path("api/parties/", views_api.party_list, name="party-list"),

    # -------- Voting --------
    path("vote/submit/", views.submit_vote, name="submit-vote"),
    path("vote/candidate/", views.submit_candidate_vote, name="submit-candidate-vote"),
    path("vote/party/", views.submit_party_vote, name="submit-party-vote"),

    # -------- AJAX helpers --------
    path("ajax/districts-by-province/", views_api.districts_by_province, name="districts-by-province"),

    # -------- Results / Monitoring --------
    path("results/candidates/", views_results.candidate_vote_results, name="candidate-results"),
    path("results/parties/", views_results.party_vote_results, name="party-results"),
    path("results/summary/", views_results.voting_summary, name="voting-summary"),
    path("results/province/", views_results.votes_by_province, name="votes-by-province"),
    path("results/district/", views_results.votes_by_district, name="votes-by-district"),

    # -------- Temporary / Test Endpoints --------
    path("test/validate/candidate/", views.test_candidate_validation, name="test-candidate-validation"),
    path("test/vote/candidate/", views.test_submit_candidate_vote, name="test-submit-candidate"),
    path("test/vote/party/", views.test_submit_party_vote, name="test-submit-party"),
    path("test/voting/context/", views.voting_context, name="test-voting-context"),
]
#test_submit_candidate_vote
#test_submit_party_vote
#test_candidate_validation
