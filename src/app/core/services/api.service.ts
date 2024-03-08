import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IProject } from '../../interfaces/IProject';
import { environment } from '../../environments/environment.development';
import { IActivity } from '../../interfaces/IActivity';
import { INews } from '../../interfaces/INews';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProyects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${environment.urlBase}proyectos`);
  }

  getProyect(id: number): Observable<IProject> {
    return this.http.get<IProject[]>(`${environment.urlBase}proyectos?id=${id}`).pipe(
      map(projects => projects[0])
    );
  }

  getActivities(): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(`${environment.urlBase}actividades`);
  }

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${environment.urlBase}noticias`);
  }
}
