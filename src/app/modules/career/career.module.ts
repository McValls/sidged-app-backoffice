import { ErrorsModule } from './../errors/errors.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from './../loading/loading.module';
import { CareersCreateDialogComponent } from './careers/careers-create-dialog/careers-create-dialog.component';
import { CareersEditDialogComponent } from './careers/careers-edit-dialog/careers-edit-dialog.component';
import { CareersTableComponent } from './careers/careers-table/careers-table.component';
import { CareersComponent } from './careers/careers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CareersComponent, CareersTableComponent, CareersEditDialogComponent, CareersCreateDialogComponent],
  imports: [
    CommonModule,
    LoadingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ErrorsModule
  ],
  entryComponents: [
    CareersEditDialogComponent,
    CareersCreateDialogComponent
  ]
})
export class CareerModule {

}
