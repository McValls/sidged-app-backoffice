import { ErrorsModule } from './../errors/errors.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDetailTeachersTableComponent } from './courses/course-detail/course-detail-teachers-table/course-detail-teachers-table.component';
import { CourseDetailStudentsTableComponent } from './courses/course-detail/course-detail-students-table/course-detail-students-table.component';
import { LoadingModule } from './../loading/loading.module';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { CoursesTableComponent } from './courses/courses-table/courses-table.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CoursesComponent, CoursesTableComponent, CourseCreateComponent, CourseDetailComponent,
  CourseDetailStudentsTableComponent, CourseDetailTeachersTableComponent],
  imports: [
    CommonModule,
    LoadingModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorsModule,
    LoadingModule
  ],
  exports: [
    CoursesTableComponent
  ]
})
export class CourseModule { }
