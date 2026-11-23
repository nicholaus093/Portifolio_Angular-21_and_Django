from django.db import models

class PersonalInformation(models.Model):
    full_name = models.CharField(max_length=150)
    title = models.CharField(max_length=150)
    bio = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=100, blank=True)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)

    def __str__(self):
        return self.full_name

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('Frontend', 'Frontend'),
        ('Backend', 'Backend'),
        ('Database', 'Database'),
        ('DevOps', 'DevOps'),
        ('Other', 'Other'),
    ]
    PROFICIENCY_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
        ('Expert', 'Expert'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Frontend')
    proficiency = models.CharField(max_length=50, choices=PROFICIENCY_CHOICES, default='Intermediate')

    def __str__(self):
        return f"{self.name} ({self.proficiency})"

class Experience(models.Model):
    company = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField()

    def __str__(self):
        return f"{self.role} at {self.company}"

class EducationBackground(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=150)
    field_of_study = models.CharField(max_length=150)
    start_year = models.IntegerField()
    end_year = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.degree} - {self.institution}"

class Contact(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}: {self.subject}"