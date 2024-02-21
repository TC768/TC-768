import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from '../../interfaces/IActivity';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  card!: Activity | {
    image: 'imagen1.jpg';
    description: 'Activity 1';
    information: 'Information about activity 1';
  };
  @Output() showDetailsChange = new EventEmitter<boolean>();

  showDetails = false;

  constructor() { }

  showModal(): void {
    this.showDetails = true;
    this.showDetailsChange.emit(this.showDetails);
  }

  closeModal(): void {
    this.showDetails = false;
    this.showDetailsChange.emit(this.showDetails);
  }
}
