import { CareersService } from './../../../../services/careers/careers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-careers-create-dialog',
  templateUrl: './careers-create-dialog.component.html',
  styleUrls: ['./careers-create-dialog.component.css']
})
export class CareersCreateDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private careersService: CareersService,
    public dialogRef: MatDialogRef<CareersCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
  }

  createCareer() {
    this.careersService.create(this.formCode.value, this.formName.value)
      .then(data => this.dialogRef.close(data));
  }

  get formCode() {return this.form.get('code');}
  get formName() {return this.form.get('name');}

}
