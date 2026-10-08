import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Moiz Dudhbhai · Full Stack .NET Developer',
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./features/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found · Moiz Dudhbhai',
  },
];
