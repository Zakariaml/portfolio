import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrl: './welcome-dialog.component.less',
  standalone: true,
  imports: [CommonModule, MatDialogModule]
})
export class WelcomeDialogComponent {
  constructor(private dialogRef: MatDialogRef<WelcomeDialogComponent>) {}
  
  close(): void {
    this.dialogRef.close();
  }
}
