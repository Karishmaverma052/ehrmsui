import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  template: `
    <!-- Toolbar -->
    <mat-toolbar color="primary">
      <span class="spacer">{{ title() }}</span>
      <button mat-button routerLink="/employees" routerLinkActive="active">Employees</button>
      <button mat-button routerLink="/attendance" routerLinkActive="active">Mark Attendance</button>
      <button mat-button routerLink="/attendance-records" routerLinkActive="active">View Records</button>
    </mat-toolbar>

    <!-- Main Content -->
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    main {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    button.active {
      text-decoration: underline;
    }
  `]
})
export class App {
  protected readonly title = signal('Employee Management System');
}
