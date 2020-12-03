import { CareersService } from './../../../services/careers/careers.service';
import { SubjectsService } from './../../../services/subjects/subjects.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Career } from 'src/app/model/career/career.model';

@Component({
  selector: 'subjects-create-dialog',
  templateUrl: './subjects-create-dialog.component.html',
  styleUrls: ['./subjects-create-dialog.component.css']
})
export class SubjectsCreateDialogComponent implements OnInit {

  form: FormGroup;
  careers: Array<Career>;

  constructor(private subjectsService: SubjectsService,
    private careersService: CareersService,
    private dialogRef: MatDialogRef<SubjectsCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {}) { }

  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      careerCode: new FormControl('', [Validators.required])
    });

    this.getCareers();
  }

  createSubject() {
    this.subjectsService.create(this.formCode.value, this.formName.value, this.formCareerCode.value)
      .subscribe(_ => this.dialogRef.close());
  }

  private getCareers(): void {
    this.careersService.getAllCareers().then(data => this.careers = data)
  }

  get formCode() { return this.form.get('code') }
  get formName() { return this.form.get('name') }
  get formCareerCode() { return this.form.get('careerCode') }

}
