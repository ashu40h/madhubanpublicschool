import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
    {path: 'admissions', loadComponent: () => import('./admissions/admissions.component').then(m => m.AdmissionsComponent)},
    {path: 'academics', loadComponent: () => import('./academics/academics.component').then(m => m.AcademicsComponent)},
    {path: 'faculty', loadComponent: () => import('./faculty/faculty.component').then(m => m.FacultyComponent)},
    {path: 'gallery', loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent)},
    {path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)},
    {path: 'registration', loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent)},
];