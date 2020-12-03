import { UserData } from '../../../model/user/user-data.model';
import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean;
  wrongLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      username : new FormControl('', [
        Validators.required
        ]),
      password : new FormControl('', [
        Validators.required])
    });
  }

  public login() {
    Object.keys(this.form.controls).forEach(field => {
      this.form.get(field).markAsTouched();

    });
    if(this.form.valid){
      this.loading = true;
      this.loginService.login(this.formUsername.value, this.formPassword.value)
        .then((data: UserData) => {
            this.router.navigate(['/dashboard']);
            this.wrongLogin = false;
            this.loading = false;
        }, (err: any) => {
          console.log(err);
          this.wrongLogin = true;
          this.loading = false;
        });
    }
  }

  public openSignUp(){
    this.router.navigate(['/sign-up']);
  }

  get formUsername() { return this.form.get('username'); }
  get formPassword() { return this.form.get('password'); }

}
