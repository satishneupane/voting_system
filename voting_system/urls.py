"""
URL configuration for voting_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from elections import views as elections_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("elections.urls")),
    path('', elections_views.home, name='home'),
    path('vote/submit/', elections_views.submit_vote, name='home'),
    path("ajax/districts-by-province/", elections_views.districts_by_province, name='districts-by-province'),
    path("vote/candidate/", elections_views.test_submit_candidate_vote),
    path("vote/party/", elections_views.test_submit_party_vote),
    path("vote/context", elections_views.voting_context),
    path("validate/candidate/", elections_views.test_candidate_validation, name="test-candidate-validation"),
]
