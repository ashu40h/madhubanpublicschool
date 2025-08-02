import { Routes } from '@angular/router';

export const routes: Routes = [
     {path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)}
];
