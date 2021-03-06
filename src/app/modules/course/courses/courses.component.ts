import { CoursesService } from './../../../services/courses/courses.service';
import { Course } from './../../../model/course/course.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  	loading: boolean = false;
  	courses: Array<Course>;

  	constructor(private router: Router,
  		private coursesService: CoursesService) { }

  	ngOnInit() {
  		this.getAllCourses();
  	}

  	private getAllCourses(){
  		this.loading = true;
  		this.coursesService.getAllCourses()
  			.then((data: Array<Course>) => {
  				this.courses = data;
  				this.loading = false;
  			}, err => {
  				console.log(JSON.stringify(err));
  			});
  	}

    public goToDetail($event) {
      let course: Course = $event.data;
      this.router.navigate(['/dashboard/courses/detail/code/'
        + course.code
        + '/year/'
        + course.year
        + '/shift/'
        + course.shift
        + '/name/'
        + course.name]);
    }

    public backToDashboard(){
      this.router.navigate(['/dashboard']);
    }

    public newCourse(){
      this.router.navigate(['/dashboard/courses/create']);
    }

}
