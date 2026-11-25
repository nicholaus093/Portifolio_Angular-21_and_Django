import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PersonalInformation,
  Skill,
  Project,
  EducationBackground,
  Contact,
} from '../models/resume.model';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api';

  // Personal Information
  getPersonalInformation(): Observable<PersonalInformation[]> {
    return this.http.get<PersonalInformation[]>(`${this.apiUrl}/personal-information/`);
  }

  createPersonalInformation(data: PersonalInformation): Observable<PersonalInformation> {
    return this.http.post<PersonalInformation>(`${this.apiUrl}/personal-information/`, data);
  }

  updatePersonalInformation(id: number, data: PersonalInformation): Observable<PersonalInformation> {
    return this.http.put<PersonalInformation>(`${this.apiUrl}/personal-information/${id}/`, data);
  }

  deletePersonalInformation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/personal-information/${id}/`);
  }

  // Skills
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills/`);
  }

  createSkill(data: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiUrl}/skills/`, data);
  }

  updateSkill(id: number, data: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiUrl}/skills/${id}/`, data);
  }

  deleteSkill(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/skills/${id}/`);
  }

  // Projects
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects/`);
  }

  createProject(data: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/projects/`, data);
  }

  updateProject(id: number, data: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/projects/${id}/`, data);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/projects/${id}/`);
  }

  // Education Background
  getEducationBackground(): Observable<EducationBackground[]> {
    return this.http.get<EducationBackground[]>(`${this.apiUrl}/education-background/`);
  }

  createEducationBackground(data: EducationBackground): Observable<EducationBackground> {
    return this.http.post<EducationBackground>(`${this.apiUrl}/education-background/`, data);
  }

  updateEducationBackground(id: number, data: EducationBackground): Observable<EducationBackground> {
    return this.http.put<EducationBackground>(`${this.apiUrl}/education-background/${id}/`, data);
  }

  deleteEducationBackground(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/education-background/${id}/`);
  }

  // Contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts/`);
  }

  createContact(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/contacts/`, data);
  }

  updateContact(id: number, data: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/contacts/${id}/`, data);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/contacts/${id}/`);
  }
}