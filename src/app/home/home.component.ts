import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  carouselInterval: any;
  isLoading = true;
  loadedImages = new Set<number>();

  campusImages = [
    { src: 'assets/images/1.png', alt: 'Madhuban Public School Main Building' },
    { src: 'assets/images/2.png', alt: 'School Playground and Sports Area' },
    { src: 'assets/images/3.png', alt: 'Modern Classroom with Smart Board' },
    { src: 'assets/images/4.png', alt: 'Science Laboratory Equipment' },
    { src: 'assets/images/5.png', alt: 'School Library and Reading Corner' },
    { src: 'assets/images/6.png', alt: 'Computer Laboratory' },
    { src: 'assets/images/7.png', alt: 'Students in Classroom Learning' },
    { src: 'assets/images/8.png', alt: 'School Assembly Hall' },
    { src: 'assets/images/9.png', alt: 'Art and Craft Room' },
    { src: 'assets/images/10.png', alt: 'Music and Dance Room' },
    { src: 'assets/images/11.png', alt: 'School Cafeteria and Dining Area' },
    { src: 'assets/images/12.png', alt: 'School Garden and Green Area' },
    { src: 'assets/images/13.png', alt: 'Students Playing Sports' },
    { src: 'assets/images/14.png', alt: 'Cultural Program Performance' },
    { src: 'assets/images/15.png', alt: 'Science Exhibition Display' },
    { src: 'assets/images/16.png', alt: 'School Transport and Parking' },
    { src: 'assets/images/17.png', alt: 'School Entrance and Reception' },
    { src: 'assets/images/18.png', alt: 'School Administrative Block' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only load images in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.loadImage(0);
    } else {
      this.isLoading = false;
    }
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  getCurrentImageSrc(): string {
    return this.campusImages[this.currentImageIndex]?.src || '';
  }

  getCurrentImageAlt(): string {
    return this.campusImages[this.currentImageIndex]?.alt || '';
  }


  loadImage(index: number) {
    if (!isPlatformBrowser(this.platformId)) {
      // Skip image loading on server-side
      this.isLoading = false;
      return;
    }

    // Simple approach - just mark as loaded and start carousel
    this.loadedImages.add(index);
    this.isLoading = false;
    if (index === this.currentImageIndex) {
      this.startCarousel();
    }
  }

  onImageLoad() {
    this.isLoading = false;
    this.loadedImages.add(this.currentImageIndex);
  }

  onImageError() {
    this.isLoading = false;
    console.error(`Failed to load current image: ${this.getCurrentImageSrc()}`);
  }

  startCarousel() {
    if (!isPlatformBrowser(this.platformId)) {
      return; // Skip carousel on server-side
    }
    
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    this.carouselInterval = setInterval(() => {
      this.nextImage();
    }, 4000); // Increased to 4 seconds for better viewing
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextImage() {
    const nextIndex = (this.currentImageIndex + 1) % this.campusImages.length;
    this.currentImageIndex = nextIndex;
    this.loadImage(nextIndex);
  }

  previousImage() {
    const prevIndex = this.currentImageIndex === 0 
      ? this.campusImages.length - 1 
      : this.currentImageIndex - 1;
    this.currentImageIndex = prevIndex;
    this.loadImage(prevIndex);
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
    this.loadImage(index);
    this.stopCarousel();
    this.startCarousel(); // Restart the auto-rotation
  }
}
