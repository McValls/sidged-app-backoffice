import { NgxLoadingModule } from 'ngx-loading';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [
    LoadingComponent
  ]
})
export class LoadingModule { }
