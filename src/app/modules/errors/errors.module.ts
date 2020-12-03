import { ErrorsComponent } from './errors/errors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorsComponent
  ]
})
export class ErrorsModule { }
