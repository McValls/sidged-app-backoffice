import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgxLoadingModule } from 'ngx-loading';
import { LoadingComponent } from './loading/loading.component';
import { ErrorsComponent } from './errors/errors.component';
import { SuccessfulSignUpDialogComponent } from './dialogs/successful-sign-up-dialog/successful-sign-up-dialog.component';
import { UsersComponent } from './users/users.component';

import { AddHeaderInterceptor } from './interceptors/add-header.interceptor';
import { SharingDataService } from './services/local-storage/sharing-data.service';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { EditUserDialogComponent } from './dialogs/edit-user-dialog/edit-user-dialog.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesTableComponent } from './courses/courses-table/courses-table.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseDetailStudentsTableComponent } from './courses/course-detail/course-detail-students-table/course-detail-students-table.component';
import { AssignTeacherDialogComponent } from './dialogs/assign-teacher-dialog/assign-teacher-dialog.component';
import { TeachersTableComponent } from './teachers/teachers-table/teachers-table.component';
import { CourseDetailTeachersTableComponent } from './courses/course-detail/course-detail-teachers-table/course-detail-teachers-table.component';
import { AddStudentToCourseDialogComponent } from './dialogs/add-student-to-course-dialog/add-student-to-course-dialog.component';
import { StudentsTableComponent } from './students/students-table/students-table.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { PresentismByCourseComponent } from './presentism/by-course/presentism-by-course.component';
import { PresentismByStudentComponent } from './presentism/by-student/presentism-by-student.component';
import { PresentismComponent } from './presentism/presentism/presentism.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    LoadingComponent,
    ErrorsComponent,
    SuccessfulSignUpDialogComponent,
    UsersComponent,
    UsersTableComponent,
    EditUserDialogComponent,
    CoursesComponent,
    CoursesTableComponent,
    CourseDetailComponent,
    CourseDetailStudentsTableComponent,
    AssignTeacherDialogComponent,
    TeachersTableComponent,
    CourseDetailTeachersTableComponent,
    AddStudentToCourseDialogComponent,
    StudentsTableComponent,
    CourseCreateComponent,
    PresentismByCourseComponent,
    PresentismByStudentComponent,
    PresentismComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    MatDialogModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  exports: [
  ],
  entryComponents: [
    EditUserDialogComponent,
    AssignTeacherDialogComponent,
    AddStudentToCourseDialogComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
    deps: [SharingDataService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }