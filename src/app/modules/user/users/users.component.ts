import { EditUserDialogComponent } from './../../../dialogs/edit-user-dialog/edit-user-dialog.component';
import { UserType } from './../../../model/user/user-type';
import { TeachersService } from './../../../services/teachers/teachers.service';
import { StudentsService } from './../../../services/students/students.service';
import { Student } from './../../../model/student/student.model';
import { Teacher } from './../../../model/teacher/teacher.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
    private router: Router,
    public dialog: MatDialog) { }

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

  public editUser($event) {
    let user = $event.data;
    let userType = $event.userType;
    this.openEditUserDialog(user, userType);
  }

  private openEditUserDialog(user: any, userType: UserType){
    let dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '600px',
      data: {user: user, userType: userType},
      disableClose: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().toPromise().then((data) => {
      user.names = data.names;
      user.lastname = data.lastname;
      user.contactData.emails = data.contactData.emails;
      user.identificationNumber = data.identificationNumber;
    });
  }
}
