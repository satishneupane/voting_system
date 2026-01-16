from django.urls import path
from . import views

app_name = "elections"

urlpatterns = [
    # Home / sanity check
    path("", views.home, name="home"),

    # Voting endpoints
    path("vote/candidate/", views.submit_candidate_vote, name="candidate-vote"),
    path("vote/party/", views.submit_party_vote, name="party-vote"),
    path("results/fptp/", views.fptp_results_view),
    path("results/pr/", views.pr_results_view),
    path("api/votes/fptp/", views.fptp_votes_summary, name="fptp-votes-summary"),
    path("api/votes/pr/", views.pr_votes_summary, name="pr-votes-summary"),
    path("api/votes/breakdown/", views.votes_breakdown, name="votes-breakdown"),
    path("api/votes/seats", views.seats_summary, name="seats-summary"),
]