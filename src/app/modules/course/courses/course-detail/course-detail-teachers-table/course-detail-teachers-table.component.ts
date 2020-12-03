import { Teacher } from './../../../../../model/teacher/teacher.model';
import { CoursesService } from './../../../../../services/courses/courses.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-detail-teachers-table',
  templateUrl: './course-detail-teachers-table.component.html',
  styleUrls: ['./course-detail-teachers-table.component.css']
})
export class CourseDetailTeachersTableComponent implements OnInit {

	@Input() teachers: Array<Teacher>;
	@Input() loading: boolean;
	@Input() courseCode: string;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  public removeTeacher(teacher: Teacher) {
  	this.loading = true;
  	this.coursesService.removeTeacher(this.courseCode, teacher)
  		.then((data: Array<Teacher>) => {
  			this.teachers = data;
  			this.loading = false;
  		}, err => {
  			alert(err);
  			this.loading = false;
  		})
  }

}
