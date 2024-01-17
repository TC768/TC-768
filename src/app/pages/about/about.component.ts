import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavFalsoComponent } from '../../components/nav-falso/nav-falso.component';
import { ApiService } from '../../core/services/api.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { proyect } from '../../interfaces/proyect';
import { AsyncPipe } from '@angular/common';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, FooterComponent, NavFalsoComponent, ErrorMessageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  public proyects$!: Observable<proyect>;
  public erroMessage: string = "";
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.proyects$ = this.service.getProyects().pipe(catchError((error : string) => {
      this.erroMessage = error;
      return EMPTY;
    }));

    console.log(this.proyects$);
  }
}
