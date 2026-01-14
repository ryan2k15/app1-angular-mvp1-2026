import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MsalModule, MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MsalModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('app1-angular-mvp1-20261');

  constructor(private msal: MsalService) {
    // Handle redirect flow results and set active account when present
    this.msal.handleRedirectObservable().subscribe({
      next: (result: any) => {
        if (result && (result as any).account) {
          this.msal.instance.setActiveAccount((result as any).account);
        }
      },
      error: (e) => console.error('MSAL redirect error', e)
    });
  }
} 
