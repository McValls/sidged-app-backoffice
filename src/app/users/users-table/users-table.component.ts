import { Component, Input } from '@angular/core';
import { UserType } from '../../model/user-type';
import { EditUserDialogComponent } from '../../dialogs/edit-user-dialog/edit-user-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

	@Input() loading: boolean;
	@Input() users: Array<any> = new Array();
	@Input() userType: UserType;

  constructor(public dialog: MatDialog) { }

  public editUser(user) {
    this.openEditUserDialog(user);
  }

  private openEditUserDialog(user){
    let dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '600px',
      data: {user: user, userType: this.userType},
      disableClose: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().toPromise().then((data) => {
      user.names = data.names;
      user.lastname = data.lastname;
      user.contactData.emails = data.contactData.emails;
      user.identificationNumber = data.identificationNumber;
    });
  }

}
