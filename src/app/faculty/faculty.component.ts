import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent implements OnInit {
  faculty = [
    {
      name: 'Mrs. Poonam',
      role: 'Principal',
      qualification: 'M.A., B.Ed.',
      experience: '20+ Years',
      bio: 'A visionary leader with a passion for holistic education and student development.'
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Head of Academics',
      qualification: 'M.Sc., B.Ed.',
      experience: '15 Years',
      bio: 'Specializes in innovative teaching methodologies for science and mathematics.'
    },
    {
      name: 'Ms. Priya Singh',
      role: 'English Teacher',
      qualification: 'M.A. English, B.Ed.',
      experience: '12 Years',
      bio: 'Passionate about literature and creative writing, inspiring students to express themselves.'
    },
    {
      name: 'Mr. Amit Verma',
      role: 'Mathematics Teacher',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: '10 Years',
      bio: 'Makes complex mathematical concepts simple and engaging for students.'
    },
    {
      name: 'Dr. Sunita Gupta',
      role: 'Science Teacher',
      qualification: 'Ph.D. Physics, M.Ed.',
      experience: '18 Years',
      bio: 'Expert in physics with a focus on practical applications and scientific thinking.'
    },
    {
      name: 'Mr. Vikram Joshi',
      role: 'Social Studies Teacher',
      qualification: 'M.A. History, B.Ed.',
      experience: '14 Years',
      bio: 'Brings history to life with engaging stories and interactive teaching methods.'
    },
    {
      name: 'Ms. Neha Agarwal',
      role: 'Computer Science Teacher',
      qualification: 'M.Tech. Computer Science, B.Ed.',
      experience: '8 Years',
      bio: 'Tech-savvy educator preparing students for the digital future.'
    },
    {
      name: 'Mr. Ravi Malhotra',
      role: 'Physical Education Teacher',
      qualification: 'M.P.Ed.',
      experience: '16 Years',
      bio: 'Promotes physical fitness and sportsmanship among students.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}