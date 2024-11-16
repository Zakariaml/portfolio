import { Component, Directive, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from "./views/intro/intro.component";
import { KeyConceptComponent } from "./views/key-concept/key-concept.component";
import { ExperienceComponent } from "./views/experience/experience.component";
import { CareerJourneyComponent } from "./views/career-journey/career-journey.component";
import { SkillsComponent } from "./views/skills/skills.component";
import { ContactComponent } from "./views/contact/contact.component";
import { CommonModule } from '@angular/common';
import { WelcomeDialogComponent } from './views/welcome-dialog/welcome-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoadingAnimationComponent } from './views/loading-animation/loading-animation.component';
import { LoadingService } from './services/loading.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IntroComponent, 
    KeyConceptComponent, 
    ExperienceComponent, 
    CareerJourneyComponent, 
    SkillsComponent, 
    ContactComponent,
    LoadingAnimationComponent,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit{
  title = 'Zakaria MILOUDI Portfolio';
  isDarkMode = true;
  currentYear = new Date().getFullYear();
  isSidenavOpen = false;
  private dialogShown = false;
  showContent = false;

  constructor(
    private dialog: MatDialog,
    private loadingService: LoadingService
  ) {}

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  ngOnInit() {
    // Reset states
    this.dialogShown = false;
    this.showContent = false;
    localStorage.removeItem('welcomeDialogShown'); // Reset localStorage on init
    
    this.loadingService.loadingComplete$
      .subscribe(isComplete => {
        if (isComplete && !this.dialogShown) {
          this.dialogShown = true;
          this.showContent = true;
          
          // Check if dialog has been shown in this session
          const dialogShown = localStorage.getItem('welcomeDialogShown');
          if (!dialogShown) {
            setTimeout(() => {
              this.showWelcomeDialog();
              localStorage.setItem('welcomeDialogShown', 'true');
            }, 300);
          }
        }
      });
  }

  private showWelcomeDialog(): void {
    if (localStorage.getItem('welcomeDialogShown')) return;
    
    this.dialog.open(WelcomeDialogComponent, {
      width: '560px',
      panelClass: 'welcome-dialog',
      disableClose: false,
      backdropClass: 'welcome-dialog-backdrop',
      hasBackdrop: true
    });
  }
}
