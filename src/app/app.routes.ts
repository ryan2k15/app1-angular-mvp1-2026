import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LandingComponent } from './landing.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent, canActivate: [MsalGuard] },
];
