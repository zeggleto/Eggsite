import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projectUrl = 'assets/data/projects.json';
  projects: Project[] = [];
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this._projectUrl).pipe(
      catchError(this.handleError));
  }

  getProject(name: string): Observable<Project> {
    return this.http.get<Project[]>(this._projectUrl)
      .pipe(map(projects => projects.filter(
        project => project.name.replace(/\s/g, '')
          .toLowerCase() === name)[0]
      )).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.error() || 'Server error'));
  }
}

