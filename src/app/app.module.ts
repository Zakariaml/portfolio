import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ExperienceDialogComponent } from './views/experience/experience-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // ... other declarations
    ExperienceDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // ... other imports
    MatDialogModule,
    CommonModule
  ]
})
export class AppModule { } 