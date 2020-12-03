import { Period } from './../../../../model/period/period.model';
import { Shift } from './../../../../model/course/course.model';
import { CoursesService } from './../../../../services/courses/courses.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course/course.model';

@Component({
  selector: 'courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {

  	@Input() loading: boolean;
  	@Input() courses: Array<Course> = new Array<Course>();
    @Input() actionButtonLabel: string;
    @Output() onActionClicked: EventEmitter<any> = new EventEmitter<any>();

  	constructor(private router: Router, private coursesService: CoursesService) { }

  	ngOnInit() {
  	}

  	public getShift(shift: Shift){
      return this.coursesService.getShift(shift);
    }

    public getPeriod(period: Period){
  		return this.coursesService.getPeriod(period);
  	}

    actionClickListener(course: Course) {
      this.onActionClicked.emit({data: course});
    }

}
