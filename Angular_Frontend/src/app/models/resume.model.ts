export interface PersonalInformation {
  id?: number;
  full_name: string;
  professional_title: string;
  bio: string;
  profile_image?: string;
  location?: string;
}

export interface WorkingExperience {
  id?: number;
  job_title: string;
  company_name: string;
  location?: string;
  start_date: string;
  end_date?: string | null;
  is_current: boolean;
  description: string;
}

export interface EducationBackground {
  id?: number;
  institution_name: string;
  degree: string;
  field_of_study: string;
  start_year: number;
  end_year?: number | null;
  description?: string;
}

export interface Skill {
  id?: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
  proficiency: number;
}

export interface Contact {
  id?: number;
  platform: 'Email' | 'Phone' | 'GitHub' | 'LinkedIn' | 'Website';
  value: string;
  url?: string;
}