import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'src/app/model/subject/subject.model';
import { SubjectsService } from './../../../services/subjects/subjects.service';
import { SubjectsCreateDialogComponent } from './../subjects-create-dialog/subjects-create-dialog.component';
import { SubjectsEditDialogComponent } from './../subjects-edit-dialog/subjects-edit-dialog.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Array<Subject>;
  loading = false;

  constructor(private subjectsService: SubjectsService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getSubjects();
  }

  private getSubjects(): void {
    this.loading = true;
    this.subjectsService.getAll().subscribe(data => {
      this.subjects = data;
      this.loading = false;
    });
  }

  backToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  newSubject() {
    const dialogRef = this.dialog.open(SubjectsCreateDialogComponent, {
      width: '500px',
      data: {},
      disableClose: false,
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(() => this.getSubjects());
  }

  openEditDialog($event) {
    const subject = $event.data;
    const dialogRef = this.dialog.open(SubjectsEditDialogComponent, {
      width: '400px',
      data: {subject},
      disableClose: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(() => this.getSubjects());
  }

}
