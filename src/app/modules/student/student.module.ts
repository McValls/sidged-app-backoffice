import { LoadingModule } from './../loading/loading.module';
import { StudentsTableComponent } from './students/students-table/students-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StudentsTableComponent],
  imports: [
    CommonModule,
    LoadingModule
  ],
  exports: [StudentsTableComponent]
})
export class StudentModule { }
