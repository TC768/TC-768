import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { IProject } from '../../interfaces/IProject';
import { AsyncPipe } from '@angular/common';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-projects',
  standalone: true,
  imports: [AsyncPipe, ErrorMessageComponent],
  templateUrl: './carousel-projects.component.html',
  styleUrl: './carousel-projects.component.css'
})
export class CarouselProjectsComponent implements OnInit {

  public proyects$!: Observable<IProject[]>;
  public erroMessage: string = "";
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.proyects$ = this.service.getProyects().pipe(catchError((error: string) => {
      this.erroMessage = error;
      return EMPTY;
    }));
  }

  currentIndex = 0;

  moveCarousel(offset: number): void {
    const slides = document.querySelector('.carousel__slides');
    const activeSlide = slides?.querySelector('.carousel__slide[data-active]');

    if (slides == null || activeSlide == null) {
      return;
    }

    const childrenArray = Array.from(slides.children);
    const newIndex = (childrenArray.indexOf(activeSlide) + offset + childrenArray.length) % childrenArray.length;

    activeSlide.removeAttribute('data-active');
    childrenArray[newIndex]?.setAttribute('data-active', 'true');
    this.currentIndex = newIndex;
  }

  navigateToProject(id: number): void {
    this.router.navigate(['/project', id]);
  }


}
