import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css'
})
export class AcademicsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // Component initialization
  }
}
