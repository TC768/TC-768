import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Activity } from '../../interfaces/IActivity';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  coverImage = "../../../assets/Tc768Teamcover.jpg";
  activity: Activity = {
    image: '../../../assets/Tc768Teamcover.jpg',
    description: 'Activity',
    information: 'Information about activity 1'
  };
  activities: Activity[] = [
    {
      image: '../../../assets/Tc768Teamcover.jpg',
      description: 'Activity 1',
      information: 'Information about activity 1'
    },
    {
      image: '../../../assets/Tc768Teamcover.jpg',
      description: 'Activity 2',
      information: 'Information about activity 2'
    },
    {
      image: '../../../assets/Tc768Teamcover.jpg',
      description: 'Activity 3',
      information: 'Information about activity 3'
    },
    {
      image: '../../../assets/Tc768Teamcover.jpg',
      description: 'Activity 4',
      information: 'Information about activity 4'
    }
  ];

  constructor() { }

  onDetailsChange(showDetails: boolean): void {
    if (showDetails) {
      // Desactivar otras funcionalidades de la aplicación.
      // Cargar la información completa de la actividad.
    } else {
      // Activar las funcionalidades de la aplicación.
    }
  }
}
