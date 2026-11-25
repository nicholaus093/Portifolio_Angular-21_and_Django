export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Other';
export type SkillProficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface PersonalInformation {
  id?: number;
  full_name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github_url: string;
  linkedin_url: string;
}

export interface Skill {
  id?: number;
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency;
}

export interface Project {
  id?: number;
  project_name: string;
  description: string;
  start_date: string;
  end_date: string | null;
  stacks: string;
  github_url: string;
}

export interface EducationBackground {
  id?: number;
  institution: string;
  degree: string;
  field_of_study: string;
  start_year: number;
  end_year: number | null;
}

export interface Contact {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}