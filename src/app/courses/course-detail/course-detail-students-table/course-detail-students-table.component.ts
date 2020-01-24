import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../model/student/student.model';
import { CoursesService } from '../../../services/courses/courses.service';

@Component({
  selector: 'course-detail-students-table',
  templateUrl: './course-detail-students-table.component.html',
  styleUrls: ['./course-detail-students-table.component.css']
})
export class CourseDetailStudentsTableComponent implements OnInit {

	@Input() loading: boolean;
	@Input() students: Array<Student>;
	@Input() courseId: number;

  	constructor(private coursesService: CoursesService) { }

  	ngOnInit() {
		
	}

	public removeStudent(student: Student) {
  	this.loading = true;
  	this.coursesService.removeStudent(this.courseId, student)
  		.then((data: Array<Student>) => {
  			this.students = data; 
  			this.loading = false;
  		}, err => {
  			alert(err);
  			this.loading = false;
  		})
  }

}
