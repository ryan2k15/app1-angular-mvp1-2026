import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing">
      <h2>Welcome{{ auth.getAccountName() ? (', ' + auth.getAccountName()) : '' }}!</h2>
      <p>You are on the landing page.</p>
      <button (click)="logout()">Logout</button>
    </div>
  `,
  styles: [`
    .landing { max-width: 700px; margin: 2rem auto; text-align:center }
    button { margin-top: 1rem; padding: 0.5rem 1rem }
  `]
})
export class LandingComponent {
  constructor(public auth: AuthService) {}
  logout() {
    this.auth.logoutRedirect();
  }
} 
