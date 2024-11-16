import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CareerJourneyComponent } from './views/career-journey/career-journey.component';
import { ContactComponent } from './views/contact/contact.component';
import { ExperienceDialogComponent } from './views/experience/experience-dialog.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { IntroComponent } from './views/intro/intro.component';
import { KeyConceptComponent } from './views/key-concept/key-concept.component';
import { LoadingAnimationComponent } from './views/loading-animation/loading-animation.component';
import { SkillsComponent } from './views/skills/skills.component';
import { WelcomeDialogComponent } from './views/welcome-dialog/welcome-dialog.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    KeyConceptComponent,
    ExperienceComponent,
    CareerJourneyComponent,
    SkillsComponent,
    ContactComponent,
    LoadingAnimationComponent,
    ExperienceDialogComponent,
    WelcomeDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    LoadingAnimationComponent,
    IntroComponent,
    KeyConceptComponent,
    ExperienceComponent,
    CareerJourneyComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceDialogComponent,
    WelcomeDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
