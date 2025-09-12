import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, FooterComponent],
  styleUrls: ['./app.component.css'],
  template: `
  <app-head></app-head>
  <router-outlet></router-outlet>
  <app-footer></app-footer>`,
})
export class AppComponent {
  title = 'Madhuban Public School';
}
