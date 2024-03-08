import { Component } from '@angular/core';
import { CarouselProjectsComponent } from '../../components/carousel-projects/carousel-projects.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CarouselProjectsComponent, TimelineComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {}
