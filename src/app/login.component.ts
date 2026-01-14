import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login">
      <h2>Sign in</h2>
      <button (click)="login()">Sign in with Microsoft</button>
      <div *ngIf="auth.isAuthenticated()" class="signed">Signed in as {{ auth.getAccountName() }}</div>
    </div>
  `,
  styles: [`
    .login { max-width: 360px; margin: 2rem auto; padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08); text-align:center }
    button { margin-top: 1rem; padding: 0.5rem 1rem }
    .signed { margin-top: 0.75rem; color: #2b7a0b }
  `]
})
export class LoginComponent {
  constructor(public auth: AuthService) {}

  login() {
    this.auth.loginRedirect();
  }
} 
