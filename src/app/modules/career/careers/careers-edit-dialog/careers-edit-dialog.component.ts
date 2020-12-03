import { CareersService } from './../../../../services/careers/careers.service';
import { Career } from './../../../../model/career/career.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-careers-edit-dialog',
  templateUrl: './careers-edit-dialog.component.html',
  styleUrls: ['./careers-edit-dialog.component.css']
})
export class CareersEditDialogComponent implements OnInit {

  form: FormGroup;
  career: Career;

  constructor(private careersService: CareersService,
    public dialogRef: MatDialogRef<CareersEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

  ngOnInit() {
    this.career = this.data['career'];

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
    this.formName.setValue(this.career.name);
  }

  updateCareer() {
    this.careersService.update(this.career.id, this.formName.value)
      .then(data => this.dialogRef.close(data));
  }

  get formName() {return this.form.get('name');}

}
