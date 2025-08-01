import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, HomeComponent],
  styleUrls: ['./app.component.css'],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'SD360';
}
