
// File: app.routing.ts
// Name: Laurel Condon
// Date: 11/8/23
// Description: routing

import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'home', component: HomeComponent }
];
