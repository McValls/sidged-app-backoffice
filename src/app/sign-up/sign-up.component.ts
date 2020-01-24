import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SignUpService } from '../services/sign-up/sign-up.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorsComponent } from '../errors/errors.component';
import { matchPasswordValidator } from '../validators/match.validators';
import { SignUpData } from '../rest/sign-up-data';
import { UserType } from '../model/user-type';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
	loading: boolean = false;
  userTypes: Array<UserType> = new Array<UserType>();

  constructor(private router: Router, private signUpService: SignUpService) { }

  ngOnInit() {
    this.form = new FormGroup({
        userType : new FormControl('', [Validators.required]),
        user : new FormControl('', [
          Validators.required,
          Validators.minLength(4)
          ]),
        password : new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)]),
        confirmPassword : new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)]),
        names : new FormControl('', [
          Validators.required]),
        lastname : new FormControl('', [
          Validators.required]),
        identificationNumber : new FormControl('', [
          Validators.required]),
        email : new FormControl('', [Validators.required]),
        confirmEmail : new FormControl('', [Validators.required])
    }, {validators: matchPasswordValidator});

    this.userTypes.push(UserType.STUDENT);
    this.userTypes.push(UserType.TEACHER);
  }

  public confirm() {
    Object.keys(this.form.controls).forEach(field => {
      this.form.get(field).markAsTouched();

    });

    if(this.form.valid){
        this.loading = true;
        this.signUpService.signUp(new SignUpData(
          this.formUserType.value,
          this.formUser.value,
          this.formPassword.value,
          this.formNames.value,
          this.formLastname.value,
          this.formIdentificationNumber.value,
          this.formEmail.value))
          .then((data) => {
            this.router.navigate(['/dashboard/users']);
            this.loading = false;
          }, (err) => {
            alert("Ha ocurrido un error");
            this.loading = false;
          });
    } else {

    }
  }

  public getUserTypeLabel(userType: UserType) : string {
    switch (userType) {
      case UserType.STUDENT:
        return "Alumno/a";
      case UserType.TEACHER:
        return "Docente";
      default:
        break;
    }
    return null;
  }

  public backToUsers() {
    this.router.navigate(["/dashboard/users"]);
  }

  get formUserType() { return this.form.get('userType'); }
  get formUser() { return this.form.get('user'); }
  get formPassword() { return this.form.get('password'); }
  get formConfirmPassword() { return this.form.get('confirmPassword'); }
  get formNames() { return this.form.get('names'); }
  get formLastname() { return this.form.get('lastname'); }
  get formIdentificationNumber() { return this.form.get('identificationNumber'); }
  get formEmail() { return this.form.get('email'); }
  get formConfirmEmail() { return this.form.get('confirmEmail'); }

}
