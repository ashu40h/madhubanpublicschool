import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  selectedImage: string | null = null;
  selectedIndex: number = -1;
  currentCategory: string = 'All';

  galleryImages = [
    { src: 'assets/images/1.png', alt: 'Madhuban Public School Main Building', category: 'Campus' },
    { src: 'assets/images/2.png', alt: 'School Playground and Sports Area', category: 'Sports' },
    { src: 'assets/images/3.png', alt: 'Modern Classroom with Smart Board', category: 'Academics' },
    { src: 'assets/images/4.png', alt: 'Science Laboratory Equipment', category: 'Facilities' },
    { src: 'assets/images/5.png', alt: 'School Library and Reading Corner', category: 'Facilities' },
    { src: 'assets/images/6.png', alt: 'Computer Laboratory', category: 'Facilities' },
    { src: 'assets/images/7.png', alt: 'Students in Classroom Learning', category: 'Academics' },
    { src: 'assets/images/8.png', alt: 'School Assembly Hall', category: 'Facilities' },
    { src: 'assets/images/9.png', alt: 'Art and Craft Room', category: 'Facilities' },
    { src: 'assets/images/10.png', alt: 'Music and Dance Room', category: 'Facilities' },
    { src: 'assets/images/11.png', alt: 'School Cafeteria and Dining Area', category: 'Facilities' },
    { src: 'assets/images/12.png', alt: 'School Garden and Green Area', category: 'Campus' },
    { src: 'assets/images/13.png', alt: 'Students Playing Sports', category: 'Sports' },
    { src: 'assets/images/14.png', alt: 'Cultural Program Performance', category: 'Events' },
    { src: 'assets/images/15.png', alt: 'Science Exhibition Display', category: 'Events' },
    { src: 'assets/images/16.png', alt: 'School Transport and Parking', category: 'Facilities' },
    { src: 'assets/images/17.png', alt: 'School Entrance and Reception', category: 'Campus' },
    { src: 'assets/images/18.png', alt: 'School Administrative Block', category: 'Campus' }
  ];

  filteredImages: any[] = [];
  categories: string[] = ['All', 'Campus', 'Academics', 'Sports', 'Events', 'Facilities'];

  constructor() {}

  ngOnInit() {
    this.filterImages('All');
  }

  filterImages(category: string) {
    this.currentCategory = category;
    if (category === 'All') {
      this.filteredImages = this.galleryImages;
    } else {
      this.filteredImages = this.galleryImages.filter(image => image.category === category);
    }
  }

  openLightbox(image: any, index: number) {
    this.selectedImage = image.src;
    this.selectedIndex = this.galleryImages.indexOf(image);
  }

  closeLightbox() {
    this.selectedImage = null;
    this.selectedIndex = -1;
  }

  nextImage() {
    if (this.selectedIndex < this.filteredImages.length - 1) {
      this.selectedIndex++;
      this.selectedImage = this.filteredImages[this.selectedIndex].src;
    }
  }

  prevImage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedImage = this.filteredImages[this.selectedIndex].src;
    }
  }
}
