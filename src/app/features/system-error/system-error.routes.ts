import { Routes } from '@angular/router'; 

export const SYSTEMERRORLAYOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./system-error').then(c => c.SystemError),
    data: { title: 'system-error' }
  },   
];
 