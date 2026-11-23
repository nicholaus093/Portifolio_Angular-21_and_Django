from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PersonalInformationViewSet,
    SkillViewSet,
    ExperienceViewSet,
    EducationBackgroundViewSet,
    ContactViewSet,
)

router = DefaultRouter()
router.register(r'personal-info', PersonalInformationViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'education', EducationBackgroundViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]