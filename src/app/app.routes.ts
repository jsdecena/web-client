import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard';
import { LoginComponent } from './pages/login';
import { LogOutComponent } from './pages/login/logout.component';
import { ForgetPasswordComponent } from './pages/login/forget-password.component';
import { ResetPasswordComponent } from './pages/login/reset-password.component';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogOutComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '**',    component: NoContentComponent },
];
