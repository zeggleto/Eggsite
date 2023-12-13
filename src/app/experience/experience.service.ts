import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Experience } from './experience';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private _experienceUrl = 'assets/data/experience.json';
  private _skillsUrl = 'assets/data/skills.json';
  experience: Experience[];
  skills: Skill[];

  constructor(private http: HttpClient) { }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this._experienceUrl)
      .pipe(catchError(this.handleError));
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this._skillsUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error(err.error() || 'Server error'));
  }
}
