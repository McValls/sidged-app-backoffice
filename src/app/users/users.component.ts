import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students/students.service';
import { TeachersService } from '../services/teachers/teachers.service';
import { Student } from '../model/student/student.model';
import { Teacher } from '../model/teacher/teacher.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	students: Array<Student> = new Array<Student>();
  teachers: Array<Teacher> = new Array<Teacher>();
	loadingStudents: boolean = false;
	loadingTeachers: boolean = false;

  constructor(private studentsService: StudentsService,
  	private teachersService: TeachersService,
    private router: Router) { }

  ngOnInit() {
  	this.getAllStudents();
    this.getAllTeachers();
  }

  private getAllStudents() {
  	this.loadingStudents = true;
  	this.studentsService.getAllStudents()
  		.then((data: Array<Student>) => {
  			this.students = data;
 				this.loadingStudents = false;
  		}, error => {
  			console.log("ERROR: " + JSON.stringify(error));
  		});
  }

  private getAllTeachers() {
  	this.loadingTeachers = true;
    this.teachersService.getAllTeachers()
      .then((data: Array<Teacher>) => {
        this.teachers = data;
        this.loadingTeachers = false;
      }, error => {
        console.log("ERROR: " + JSON.stringify(error));
      });
  }

  public openSignUp(){
    this.router.navigate(['/sign-up']);
  }

  public backToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
