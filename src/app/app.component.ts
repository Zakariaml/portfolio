import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from "./views/intro/intro.component";
import { KeyConceptComponent } from "./views/key-concept/key-concept.component";
import { ExperienceComponent } from "./views/experience/experience.component";
import { CareerJourneyComponent } from "./views/career-journey/career-journey.component";
import { SkillsComponent } from "./views/skills/skills.component";
import { ContactComponent } from "./views/contact/contact.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IntroComponent, KeyConceptComponent, ExperienceComponent, CareerJourneyComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Zakaria MILOUDI Portfolio';
  isDarkMode = true;
  currentYear = new Date().getFullYear();
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
