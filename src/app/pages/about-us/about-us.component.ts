import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { proyect } from '../../interfaces/proyect';
import { AsyncPipe } from '@angular/common';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AsyncPipe, ErrorMessageComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  public proyects$!: Observable<proyect[]>;
  public erroMessage: string = "";
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.proyects$ = this.service.getProyects().pipe(catchError((error: string) => {
      this.erroMessage = error;
      return EMPTY;
    }));
  }
}
