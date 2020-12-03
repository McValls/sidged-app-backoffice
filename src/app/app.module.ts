import { DashboardModule } from './modules/dashboard/dashboard.module';
import { UserModule } from './modules/user/user.module';
import { PresentismModule } from './modules/presentism/presentism.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingModule } from 'ngx-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentToCourseDialogComponent } from './dialogs/add-student-to-course-dialog/add-student-to-course-dialog.component';
import { AssignTeacherDialogComponent } from './dialogs/assign-teacher-dialog/assign-teacher-dialog.component';
import { EditUserDialogComponent } from './dialogs/edit-user-dialog/edit-user-dialog.component';
import { SuccessfulSignUpDialogComponent } from './dialogs/successful-sign-up-dialog/successful-sign-up-dialog.component';
import { AddHeaderInterceptor } from './interceptors/add-header.interceptor';
import { CareerModule } from './modules/career/career.module';
import { CourseModule } from './modules/course/course.module';
import { ErrorsModule } from './modules/errors/errors.module';
import { LoadingModule } from './modules/loading/loading.module';
import { LoginModule } from './modules/login/login.module';
import { StudentModule } from './modules/student/student.module';
import { SubjectModule } from './modules/subject/subject.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { SharingDataService } from './services/local-storage/sharing-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SuccessfulSignUpDialogComponent,
    EditUserDialogComponent,
    AssignTeacherDialogComponent,
    AddStudentToCourseDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    MatDialogModule,
    DashboardModule,
    SubjectModule,
    LoginModule,
    LoadingModule,
    ErrorsModule,
    CareerModule,
    CourseModule,
    StudentModule,
    TeacherModule,
    PresentismModule,
    UserModule
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
