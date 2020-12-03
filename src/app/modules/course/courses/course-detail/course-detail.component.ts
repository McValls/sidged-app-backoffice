import { AddStudentToCourseDialogComponent } from './../../../../dialogs/add-student-to-course-dialog/add-student-to-course-dialog.component';
import { AssignTeacherDialogComponent } from './../../../../dialogs/assign-teacher-dialog/assign-teacher-dialog.component';
import { CoursesService } from './../../../../services/courses/courses.service';
import { Student } from './../../../../model/student/student.model';
import { Teacher } from './../../../../model/teacher/teacher.model';
import { Shift } from './../../../../model/course/course.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

	courseCode: string;
	courseYear: number;
	courseShift: Shift;
	courseName: string;
	students: Array<Student>;
  teachers: Array<Teacher>;
  loading: boolean = false;


  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService, private dialog: MatDialog) {
  	this.courseCode = this.route.snapshot.params.code;
  	this.courseYear = this.route.snapshot.params.year;
  	this.courseShift = this.route.snapshot.params.shift;
  	this.courseName = this.route.snapshot.params.name;
  }

  ngOnInit() {
    this.loading = true;
    this.getTeachers();
    this.getStudents();
  }

  private getTeachers() {
    this.coursesService.getTeachers(this.courseCode).then(
      (data: Array<Teacher>) => {
        this.teachers = data;
        if(this.students != null) {
          this.loading = false;
        }
      }, err => {
        console.log('Error getting teachers:' + JSON.stringify(err));
      }
     );
  }

  private getStudents(){
    this.coursesService.getStudents(this.courseCode).then(
      (data: Array<Student>) => {
        this.students = data;
        if (this.teachers != null) {
          this.loading = false;
        }
      }, err => {
        console.log('Error getting students:' + JSON.stringify(err));
      }
     );
  }

  public getCompleteCourse() {
  	let course =
  		this.courseName
  		+ ' - '
  		+ this.coursesService.getShift(this.courseShift)
  		+ ' - '
  		+ this.courseYear;

  	return course;
  }

  public assignTeacher() {
    const dialogRef = this.dialog.open(AssignTeacherDialogComponent, {
      width: '600px',
      data: {courseCode: this.courseCode},
      disableClose: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().toPromise().then((added: boolean) => {
      if(added) {
        this.getTeachers();
      }
    });
  }

  public addStudent() {
    const dialogRef = this.dialog.open(AddStudentToCourseDialogComponent, {
      width: '600px',
      data: {courseCode: this.courseCode},
      disableClose: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().toPromise().then((added: boolean) => {
      if(added) {
        this.getStudents();
      }
    });
  }

  public deleteCourse() {
    var del = prompt('Para borrar el curso ingrese la palabra BORRAR');
    if(del === 'BORRAR'){
      alert('Not developed yet');
    }
  }

  public backToCourses(){
  	this.router.navigate(['/dashboard/courses']);
  }

}
