import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../model/student/student.model';


@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  	@Input() loading: boolean;
	@Input() students: Array<Student>;
	@Input() actionLabel: string;
	@Input() action: Function;

  	constructor() { }

  	ngOnInit() {
  	}

  	public executeAction(student: Student) {
  		this.action(student);
  	}


}
