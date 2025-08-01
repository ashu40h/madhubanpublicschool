import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'head', loadComponent: () => import('./head/head.component').then(m => m.HeadComponent)},
    {path: 'footer', loadComponent: () => import('./footer/footer.component').then(m => m.FooterComponent)},
];
