import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { RedirectRequest } from '@azure/msal-browser';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private msalService: MsalService) {}

  loginRedirect(request?: RedirectRequest) {
    return this.msalService.loginRedirect(request);
  }

  logoutRedirect() {
    return this.msalService.logoutRedirect({ postLogoutRedirectUri: '/' });
  }

  isAuthenticated(): boolean {
    try {
      return this.msalService.instance.getAllAccounts().length > 0;
    } catch (e) {
      return false;
    }
  }

  getAccountName(): string | null {
    const acc = this.msalService.instance.getAllAccounts()[0];
    return acc ? (acc.name || acc.username) : null;
  }
} 
