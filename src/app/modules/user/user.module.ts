import { LoadingModule } from './../loading/loading.module';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersComponent, UsersTableComponent],
  imports: [
    CommonModule,
    LoadingModule
  ],
  exports: [
    UsersTableComponent
  ]
})
export class UserModule { }
