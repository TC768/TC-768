import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { IActivity } from '../../interfaces/IActivity';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { INews } from '../../interfaces/INews';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, AsyncPipe, ErrorMessageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  activities$!: Observable<IActivity[]>;
  erroMessage: string = "";

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.activities$ = this.service.getActivities().pipe(catchError((error: string) => {
      this.erroMessage = error;
      return EMPTY;
    }));
  }

  onDetailsChange(showDetails: boolean): void {
    if (showDetails) {
      // Desactivar otras funcionalidades de la aplicación.
      // Cargar la información completa de la actividad.
    } else {
      // Activar las funcionalidades de la aplicación.
    }
  }
}
