import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  currentSlideIndex = 0;
  carouselInterval: any;
  slideInterval: any;
  isLoading = true;
  loadedImages = new Set<number>();
  notices: any[] = [];
  animationDuration: string = '40s';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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

  ngOnInit() {
    // Load news data
    this.loadNewsData();
    
    // Only load images in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.loadImage(0);
      this.startSlideCarousel();
      console.log('Home component initialized, campus images:', this.campusImages.length);
      console.log('First image src:', this.campusImages[0].src);
      console.log('Current slide index:', this.currentSlideIndex);
    } else {
      this.isLoading = false;
    }
  }

  ngOnDestroy() {
    this.stopCarousel();
    this.stopSlideCarousel();
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

  // Campus Carousel Methods
  startSlideCarousel() {
    if (!isPlatformBrowser(this.platformId)) {
      return; // Skip carousel on server-side
    }

    console.log('Starting slide carousel with', this.campusImages.length, 'images');
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 seconds per slide
  }

  stopSlideCarousel() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.campusImages.length;
    console.log('Next slide, current index:', this.currentSlideIndex, 'Transform:', 'translateX(-' + (this.currentSlideIndex * 100) + '%)');
  }

  previousSlide() {
    this.currentSlideIndex = this.currentSlideIndex === 0
      ? this.campusImages.length - 1
      : this.currentSlideIndex - 1;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
    this.stopSlideCarousel();
    this.startSlideCarousel(); // Restart the auto-rotation
  }

  onCampusImageLoad(index: number) {
    console.log('Campus image loaded:', index, this.campusImages[index].src);
  }

  onCampusImageError(index: number) {
    console.error('Campus image failed to load:', index, this.campusImages[index].src);
  }

  // Debug method to test carousel
  testCarousel() {
    console.log('Testing carousel...');
    console.log('Current slide index:', this.currentSlideIndex);
    console.log('Transform value:', 'translateX(-' + (this.currentSlideIndex * 100) + '%)');
    console.log('Carousel track element:', document.querySelector('.carousel-track'));
    console.log('Carousel images:', document.querySelectorAll('.carousel-image'));
  }

  loadNewsData() {
    this.http.get<any[]>('https://raw.githubusercontent.com/ashu40h/files/main/news1.json').subscribe({
      next: (data) => {
        this.notices = data.slice(0, 100); // Show only latest 6 news items
        this.calculateAnimationDuration();
        console.log('News data loaded from GitHub:', this.notices.length);
      },
      error: (error) => {
        console.error('Error loading news data from GitHub:', error);
        // Fallback data if GitHub JSON fails to load
        this.notices = [
          {
            id: 1,
            title: "Annual Sports Day Celebration",
            date: "2024-12-15",
            category: "events",
            important: true
          },
          {
            id: 2,
            title: "Science Exhibition 2024",
            date: "2024-12-10",
            category: "academics",
            important: false
          },
          {
            id: 3,
            title: "Admissions Open for 2025-26",
            date: "2024-12-01",
            category: "admissions",
            important: true
          }
        ];
        this.calculateAnimationDuration();
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  calculateAnimationDuration() {
    // Base time per item: 8 seconds (adjustable)
    const baseTimePerItem = 8;
    // Minimum duration: 20 seconds
    const minDuration = 20;
    // Maximum duration: 80 seconds
    const maxDuration = 80;
    
    // Calculate duration based on number of items
    const calculatedDuration = this.notices.length * baseTimePerItem;
    
    // Clamp between min and max duration
    const finalDuration = Math.max(minDuration, Math.min(maxDuration, calculatedDuration));
    
    this.animationDuration = `${finalDuration}s`;
    console.log(`Animation duration set to: ${this.animationDuration} for ${this.notices.length} items`);
  }
}
