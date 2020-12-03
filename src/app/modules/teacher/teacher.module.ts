import { LoadingModule } from './../loading/loading.module';
import { TeachersTableComponent } from './teachers/teachers-table/teachers-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TeachersTableComponent],
  imports: [
    CommonModule,
    LoadingModule
  ],
  exports: [TeachersTableComponent]
})
export class TeacherModule { }
