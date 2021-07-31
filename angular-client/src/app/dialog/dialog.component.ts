import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(private router: Router,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: '', message: '' }) {
    dialogRef.disableClose = true;
  }

  close(): void {
    this.dialogRef.close();
    this.router.navigate(['/home'])
  }

  playGame() {
    window.location.reload();
  }
}
