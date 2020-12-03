import { SubjectsService } from './../../../services/subjects/subjects.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Career } from 'src/app/model/career/career.model';
import { Subject } from 'src/app/model/subject/subject.model';

@Component({
  selector: 'subjects-edit-dialog',
  templateUrl: './subjects-edit-dialog.component.html',
  styleUrls: ['./subjects-edit-dialog.component.css']
})
export class SubjectsEditDialogComponent implements OnInit {

  subject: Subject;
  form: FormGroup;
  careers: Array<Career>;

  constructor(private subjectsService: SubjectsService,
    private dialogRef: MatDialogRef<SubjectsEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {}) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    });

    this.subject = this.data['subject'];
    this.formName.setValue(this.subject.name);
  }

  updateSubject() {
    this.subjectsService.update(this.subject.code, this.formName.value)
      .subscribe(_ => this.dialogRef.close());
  }

  get formName() { return this.form.get('name') }

}
