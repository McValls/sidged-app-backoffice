import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../../model/teacher/teacher.model';

@Component({
  selector: 'teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css']
})
export class TeachersTableComponent implements OnInit {

	@Input() loading: boolean;
	@Input() teachers: Array<Teacher>;
	@Input() actionLabel: string;
	@Input() action: Function;

  	constructor() { }

  	ngOnInit() {
  	}

  	public executeAction(teacher: Teacher) {
  		this.action(teacher);
  	}

}
