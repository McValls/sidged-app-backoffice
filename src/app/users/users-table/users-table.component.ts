import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserType } from '../../model/user-type';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

	@Input() loading: boolean;
	@Input() users: Array<any> = new Array();
  @Input() userType: UserType;
  @Input() actionLabel: string;
  @Output() onActionClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  actionClickListener(user: any) {
    this.onActionClicked.emit({data: user, userType: this.userType});
  }

}
