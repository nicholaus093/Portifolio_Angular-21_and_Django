from rest_framework import viewsets
from .models import PersonalInformation, Skill, Experience, EducationBackground, Contact
from .serializers import (
    PersonalInformationSerializer,
    SkillSerializer,
    ExperienceSerializer,
    EducationBackgroundSerializer,
    ContactSerializer,
)

class PersonalInformationViewSet(viewsets.ModelViewSet):
    queryset = PersonalInformation.objects.all()
    serializer_class = PersonalInformationSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all().order_by('-start_date')
    serializer_class = ExperienceSerializer

class EducationBackgroundViewSet(viewsets.ModelViewSet):
    queryset = EducationBackground.objects.all().order_by('-start_year')
    serializer_class = EducationBackgroundSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by('-created_at')
    serializer_class = ContactSerializer