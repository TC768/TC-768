import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Project } from '../../interfaces/project';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProyects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.urlBase}proyectos`);
  }

  getProyect(id: number): Observable<Project> {
    return this.http.get<Project[]>(`${environment.urlBase}proyectos?id=${id}`).pipe(
      map(projects => projects[0])
    );
  }
}
