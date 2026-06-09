import { Routes } from '@angular/router'; 

export const TODO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./todo').then(c => c.Todo),
    data: { title: 'todo' }
  },   
];
 