import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: '',
    component: HomeComponent,
  },
];
