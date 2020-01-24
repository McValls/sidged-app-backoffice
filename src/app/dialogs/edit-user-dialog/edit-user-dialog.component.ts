import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Student } from '../../model/student/student.model';
import { Teacher } from '../../model/teacher/teacher.model';
import { UserType } from '../../model/user-type';
import { UserData } from '../../model/user-data.model';
import { TeachersService } from '../../services/teachers/teachers.service';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

	form: FormGroup;
	userId: number;
	userType: UserType;
	user: any;

    constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>, 
    	private teachersService: TeachersService,
    	private studentsService: StudentsService,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

    ngOnInit() {
    	this.form = new FormGroup({
	        names : new FormControl('', [Validators.required]),
	        lastname : new FormControl('', [Validators.required]),
	        identificationNumber : new FormControl('', [Validators.required]),
	        email : new FormControl('', [Validators.required])
    	});

    	this.userType = this.data['userType'];
    	this.user = this.data['user'];
    	this.formNames.setValue(this.user.names);
    	this.formLastname.setValue(this.user.lastname);
    	this.formEmail.setValue(this.user.contactData.emails);
    	if(this.userType == UserType.STUDENT) {
    		this.formIdentificationNumber.setValue(this.user.identificationNumber); 	
    	}
    }

    public updateUser() {
    	this.user.names = this.formNames.value;
    	this.user.lastname = this.formLastname.value;
    	this.user.identificationNumber = this.formIdentificationNumber.value;
    	this.user.contactData.emails = this.formEmail.value.toString().split(",	");

    	if(this.userType == UserType.STUDENT) {
    		this.studentsService.update(this.user as Student)
    			.then(data => {
    				this.dialogRef.close(data);
    			}, err => {
    				alert("Ha ocurrido un error: " + JSON.stringify(err));
    			});
    	} else {
    		this.teachersService.update(this.user as Teacher)
    			.then(data => {
    				this.dialogRef.close(data);
    			}, err => {
    				alert("Ha ocurrido un error: " + JSON.stringify(err));
    			});
    	}
    }

	get formNames() { return this.form.get('names'); }
	get formLastname() { return this.form.get('lastname'); }
	get formIdentificationNumber() { return this.form.get('identificationNumber'); }
	get formEmail() { return this.form.get('email'); }

}
