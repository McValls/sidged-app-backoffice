import { LoadingModule } from './../loading/loading.module';
import { ErrorsModule } from './../errors/errors.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsTableComponent } from './subjects-table/subjects-table.component';
import { SubjectsCreateDialogComponent } from './subjects-create-dialog/subjects-create-dialog.component';
import { SubjectsEditDialogComponent } from './subjects-edit-dialog/subjects-edit-dialog.component';

@NgModule({
  declarations: [SubjectsComponent, SubjectsTableComponent, SubjectsCreateDialogComponent, SubjectsEditDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorsModule,
    LoadingModule
  ],
  entryComponents: [
    SubjectsCreateDialogComponent,
    SubjectsEditDialogComponent
  ]
})
export class SubjectModule { }
