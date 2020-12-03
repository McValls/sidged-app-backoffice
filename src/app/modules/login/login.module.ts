import { SignUpComponent } from './sign-up/sign-up.component';
import { LoadingModule } from './../loading/loading.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorsModule } from './../errors/errors.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    ErrorsModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
  ]
})
export class LoginModule { }
