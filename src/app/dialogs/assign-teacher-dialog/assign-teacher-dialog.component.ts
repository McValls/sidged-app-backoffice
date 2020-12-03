import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Teacher } from '../../model/teacher/teacher.model';
import { CoursesService } from '../../services/courses/courses.service';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'assign-teacher-dialog',
  templateUrl: './assign-teacher-dialog.component.html',
  styleUrls: ['./assign-teacher-dialog.component.css']
})
export class AssignTeacherDialogComponent implements OnInit {

    allTeachers: Array<Teacher> = new Array<Teacher>();
    filteredTeachers: Array<Teacher> = new Array<Teacher>();
    loadingTable = false;
    form: FormGroup;
    courseCode: string;

    constructor(public dialogRef: MatDialogRef<AssignTeacherDialogComponent>,
    			private teachersService: TeachersService,
          private coursesService: CoursesService,
    			@Inject(MAT_DIALOG_DATA) public data: {}){}

    ngOnInit() {
      this.courseCode = this.data['courseCode'];
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
        this.coursesService.assignTeacher(this.courseCode, teacher).then(res => {
          this.dialogRef.close(true);
        }, err => {
          alert('No se pudo asignar a este docente al curso solicitado.');
        });
      }
    }

    get lastnameFilter(){ return this.form.get('lastnameFilter').value; }

}
