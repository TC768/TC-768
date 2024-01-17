import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { proyect } from '../../interfaces/proyect';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProyects() : Observable<proyect> {
    return this.http.get<proyect>(`${environment.urlBase}proyectos`);
  }
}
