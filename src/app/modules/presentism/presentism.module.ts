import { UserModule } from './../user/user.module';
import { CourseModule } from './../course/course.module';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentismByStudentComponent } from './by-student/presentism-by-student.component';
import { PresentismByCourseComponent } from './by-course/presentism-by-course.component';
import { PresentismComponent } from './presentism/presentism.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PresentismComponent, PresentismByCourseComponent, PresentismByStudentComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ChartsModule,
    CourseModule,
    UserModule
  ]
})
export class PresentismModule { }
