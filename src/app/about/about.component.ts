import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavFalsoComponent } from '../nav-falso/nav-falso.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, NavFalsoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
