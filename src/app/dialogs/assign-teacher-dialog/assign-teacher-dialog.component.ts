import {Component, Inject, OnInit, Input} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Teacher } from '../../model/teacher/teacher.model';
import { TeachersService } from '../../services/teachers/teachers.service';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'assign-teacher-dialog',
  templateUrl: './assign-teacher-dialog.component.html',
  styleUrls: ['./assign-teacher-dialog.component.css']
})
export class AssignTeacherDialogComponent implements OnInit {

    allTeachers: Array<Teacher> = new Array<Teacher>();
    filteredTeachers: Array<Teacher> = new Array<Teacher>();
    loadingTable: boolean = false;
    form: FormGroup;
    courseId: number;

    constructor(public dialogRef: MatDialogRef<AssignTeacherDialogComponent>, 
    			private teachersService: TeachersService,
          private coursesService: CoursesService,
    			@Inject(MAT_DIALOG_DATA) public data: {}) 
    { 

    }

    ngOnInit() {
      this.courseId = this.data['courseId'];
       this.form = new FormGroup({
         lastnameFilter: new FormControl('')
       });

       this.getTeachers();
    }

    private getTeachers() {
      this.loadingTable = true;
      this.teachersService.getAllTeachers().then(
        (data: Array<Teacher>) => {
          console.log(data);
          this.allTeachers = data;
          this.filteredTeachers = data;
          this.loadingTable = false;
        },
        error => {
          alert(error);
        }
      );
    }

    public cancel(){
      this.dialogRef.close(false);
    }

    public applyFilter() {
      this.filteredTeachers = this.allTeachers.filter((teacher: Teacher) => {
        return teacher.lastname.toLowerCase().includes(this.lastnameFilter.toLowerCase());
      });
    }

    public getAssignAction() {
      return (teacher:Teacher) => {
        this.coursesService.assignTeacher(this.courseId, teacher);
        this.dialogRef.close(true);
      }
    }

    get lastnameFilter(){ return this.form.get('lastnameFilter').value; }

}
