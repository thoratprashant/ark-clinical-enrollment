import { Routes } from '@angular/router'; 

export const ADMINLAYOUT_ROUTES: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then(c => c.Profile),
    data: { title: 'profile' }
  },  
  {
    path: 'change-password',
    loadComponent: () => import('./change-password/change-password').then(c => c.ChangePassword),
    data: { title: 'Change Password' }
  },
  {
    path: 'manage-sessions',
    loadComponent: () => import('./manage-sessions/manage-sessions').then(c => c.ManageSessions),
    data: { title: 'Manage Sessions' }
  },
];
 