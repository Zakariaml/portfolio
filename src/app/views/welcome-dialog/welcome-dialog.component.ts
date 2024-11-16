import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrl: './welcome-dialog.component.less'
})
export class WelcomeDialogComponent {
  constructor(private dialogRef: MatDialogRef<WelcomeDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
