import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

@Component({
    templateUrl: './experience-dialog.component.html',
  selector: 'app-experience-dialog',
  imports: [NgFor],
  standalone: true
})
export class ExperienceDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ExperienceDialogComponent>
  ) {}
} 