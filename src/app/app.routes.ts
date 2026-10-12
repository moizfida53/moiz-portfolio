import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Moiz Dudhbhai · Full Stack .NET Developer',
  },
  // Case-study pages removed (client work is confidential); old links land on the home page.
  { path: 'projects/:slug', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found · Moiz Dudhbhai',
  },
];
