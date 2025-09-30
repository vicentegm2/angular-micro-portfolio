import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Social } from './pages/social/social';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'social', component: Social }, // Cards para redes sociales
  { path: '**', redirectTo: '' },
];
