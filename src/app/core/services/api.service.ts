import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { proyects } from '../../interfaces/proyects';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProyects() : Observable<proyects> {
    return this.http.get<proyects>(`${environment.urlBase}`);
  }
}
