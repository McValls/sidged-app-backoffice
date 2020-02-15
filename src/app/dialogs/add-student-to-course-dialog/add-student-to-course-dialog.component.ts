import {Component, Inject, OnInit, Input} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../../model/student/student.model';
import { CoursesService } from '../../services/courses/courses.service';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-add-student-to-course-dialog',
  templateUrl: './add-student-to-course-dialog.component.html',
  styleUrls: ['./add-student-to-course-dialog.component.css']
})
export class AddStudentToCourseDialogComponent implements OnInit {

  	allStudents: Array<Student> = new Array<Student>();
    filteredStudents: Array<Student> = new Array<Student>();
    loadingTable: boolean = false;
    form: FormGroup;
    courseId: number;


  	constructor(public dialogRef: MatDialogRef<AddStudentToCourseDialogComponent>, 
          private coursesService: CoursesService,
          private studentsService: StudentsService,
    			@Inject(MAT_DIALOG_DATA) public data: {}) 
	  { 

	  }

	  ngOnInit() {
      this.courseId = this.data['courseId'];
      this.form = new FormGroup({
        lastnameFilter: new FormControl('')
      });
      this.getStudents();
  	}

    private getStudents() {
      this.loadingTable = true;
      this.studentsService.getAllStudents()
        .then((data: Array<Student>) => {
          this.allStudents = data;
          this.filteredStudents = data;
          this.loadingTable = false;
        });
    }

    public cancel(){
      this.dialogRef.close(false);
    }

    public applyFilter() {
      this.filteredStudents = this.allStudents.filter((student: Student) => {
        return student.lastname.toLowerCase().includes(this.lastnameFilter.toLowerCase());
      });
    }

    public getAddAction() {
      return (student:Student) => {
        this.coursesService.addStudent(this.courseId, student);
        this.dialogRef.close(true);
      }
    }

    get lastnameFilter(){ return this.form.get('lastnameFilter').value; }

}
