import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { WelcomeDialogComponent } from './views/welcome-dialog/welcome-dialog.component';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Zakaria MILOUDI Portfolio';
  isDarkMode = true;
  currentYear = new Date().getFullYear();
  isSidenavOpen = false;
  private dialog = inject(MatDialog);

  ngOnInit() {
    setTimeout(() => {
      this.showWelcomeDialog();
    }, 2500);
  }

  private showWelcomeDialog(): void {
    this.dialog.open(WelcomeDialogComponent, {
      width: '560px',
      panelClass: 'welcome-dialog',
      disableClose: false,
      backdropClass: 'backdrop-blur-sm',
      hasBackdrop: true
    });
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
