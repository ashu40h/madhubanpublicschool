import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadComponent, NgFor, HttpClientModule, FooterComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  newsPosts: any[] = [];
  screenWidth: number = 0;

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit() {
    const url = 'https://raw.githubusercontent.com/ashu40h/files/main/news1.json';
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
    
    console.log('Screen width:', this.screenWidth);

    console.log('Initial screen width:', this.screenWidth);
    this.http.get<any[]>(url).subscribe(
      data => this.newsPosts = data,
      error => console.error('Error loading posts:', error)

    );
  }
  get newsDuration() {
    return `${this.newsPosts.length * 4}s`;
  }
}
