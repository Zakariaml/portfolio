import { Component, Directive, OnInit } from '@angular/core';
import { Component, Directive, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from "./views/intro/intro.component";
import { KeyConceptComponent } from "./views/key-concept/key-concept.component";
import { ExperienceComponent } from "./views/experience/experience.component";
import { CareerJourneyComponent } from "./views/career-journey/career-journey.component";
import { SkillsComponent } from "./views/skills/skills.component";
import { ContactComponent } from "./views/contact/contact.component";
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

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
  styleUrl: './app.component.less',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ]),
    trigger('fadeBackground', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Zakaria MILOUDI Portfolio';
  isDarkMode = true;
  currentYear = new Date().getFullYear();
  isSidenavOpen = false;
  isLoading = true;
  showWelcomePopup = false;

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
      // Show welcome popup after loading
      setTimeout(() => {
        this.showWelcomePopup = true;
      }, 500); // Small delay after loading animation
    }, 2000);
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  closeWelcomePopup() {
    this.showWelcomePopup = false;
  }
}
