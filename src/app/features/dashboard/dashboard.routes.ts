import { Routes } from '@angular/router'; 

export const DASHBOARDLAYOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard').then(c => c.Dashboard),
    data: { title: 'dashboard' }
  },   
];
 