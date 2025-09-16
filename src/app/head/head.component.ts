import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {
  isMenuOpen = false;
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = (event as NavigationEnd).url;
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (typeof document !== 'undefined') {
      console.log('Menu toggled, isMenuOpen:', this.isMenuOpen);
      console.log('Mobile nav element:', document.querySelector('.mobile-nav'));
      console.log('Mobile nav classes:', document.querySelector('.mobile-nav')?.className);
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    console.log('Menu closed, isMenuOpen:', this.isMenuOpen);
  }

  isActiveRoute(route: string): boolean {
    if (route === '/' && this.currentRoute === '/') {
      return true;
    }
    return this.currentRoute.startsWith(route) && route !== '/';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (typeof document === 'undefined') return;
    
    const target = event.target as HTMLElement;
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (this.isMenuOpen && 
        !mobileNav?.contains(target) && 
        !mobileMenuBtn?.contains(target)) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    // Close mobile menu on window resize to desktop size
    if (typeof window !== 'undefined' && window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
