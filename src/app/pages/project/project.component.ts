import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Project } from '../../interfaces/project';
import { AsyncPipe } from '@angular/common';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [AsyncPipe, ErrorMessageComponent, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {

  private projectId !: number;

  public proyect$!: Observable<Project>;

  public erroMessage: string = "";

  constructor(private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.projectId = +params['id'];
    });

    this.proyect$ = this.service.getProyect(this.projectId).pipe(catchError((error: string) => {
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

}














