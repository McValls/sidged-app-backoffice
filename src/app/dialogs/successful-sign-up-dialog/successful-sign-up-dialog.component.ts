import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-successful-sign-up-dialog',
  templateUrl: './successful-sign-up-dialog.component.html',
  styleUrls: ['./successful-sign-up-dialog.component.css']
})
export class SuccessfulSignUpDialogComponent {

  constructor(public dialogRef: MatDialogRef<SuccessfulSignUpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

}
