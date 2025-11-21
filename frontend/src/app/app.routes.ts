import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

/**
 * Application routes.
 */
export const APP_ROUTES: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
