import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalysisService } from '../../services/analysis/analysis.service';
import { CoursesService } from '../../services/courses/courses.service';
import { Course } from '../../model/course/course.model';
import { PresentType, PercentageByStudentPresent } from '../../model/presentism/presentism.model';

@Component({
  selector: 'presentism-by-course',
  templateUrl: './presentism-by-course.component.html',
  styleUrls: ['./presentism-by-course.component.css']
})
export class PresentismByCourseComponent implements OnInit {

	/* BAR CHART CONFIG */
	chartConfig = {
		barChartOptions : {
			scaleShowVerticalLines: true,
			responsive: true,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		},
	  	barChartLegend : true,
	  	barChartType : 'bar',
  	};	
	  	
  	barChartLabels: Array<any>;
  	barChartData: Array<any>;	
  	chartReady: boolean = false;

  	/**********************************************/

  	/* PIE CHART CONFIG */
  	pieChartConfig = {
  		options: {
  			responsive: true,
		    legend: {
		      position: 'top',
		    }
  		},
  		legend: true,
  		chartType: 'pie',
  		colors: [{backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']}]
  	}
  	pieChartLabels: any;
	pieChartData: any;

  	/**********************************************/

  	loading: boolean = false;
  	courses: Array<Course> = new Array<Course>();
  	allCourses: Array<Course> = new Array<Course>();
	selectedCourse: Course;
	visible = false;  

  	private activeFilters = new Map();

  	constructor(private analysisService: AnalysisService,
  		private coursesService: CoursesService,
  		private router: Router) { }

  	ngOnInit() {
  		this.getAllCourses();
  	}

  	private getAllCourses(){
		this.loading = true;
		this.coursesService.getAllCourses()
			.then((data: Array<Course>) => {
				this.allCourses = data;
				this.courses = data;
				this.loading = false;
			}, err => {
				console.log(JSON.stringify(err));
			});
		}
	  
	
	makeVisible() : void {
		this.visible = !this.visible;
	}

  	goToAnalysis($event) {
  		this.selectedCourse = $event.data;
		this.analysisService.getAnalysisDataByCourse(this.selectedCourse.id).subscribe(res => {

			if(res != null){
				this.barChartLabels = [];
				this.barChartData = [
					{data: [], label: '% Presente', backgroundColor: 'green'},
					{data: [], label: '% Tarde', backgroundColor: 'yellow'},
					{data: [], label: '% Ausente', backgroundColor: 'red'},
				]
				res.presentismByMonth.forEach(monthData => {
					this.barChartLabels.push("Mes " + monthData.month);
					this.barChartData[0]['data'].push(
						monthData.percentagesByMonth
							.find(percentage => percentage.studentPresent === PresentType.PRESENT).percentage)

					this.barChartData[1]['data'].push(
						monthData.percentagesByMonth
							.find(percentage => percentage.studentPresent === PresentType.LATE).percentage)

					this.barChartData[2]['data'].push(
						monthData.percentagesByMonth
							.find(percentage => percentage.studentPresent === PresentType.ABSENT).percentage)
				});


				let presentAveragePercentage: PercentageByStudentPresent = res.totalAveragesPercentages
					.find(percentage => percentage.studentPresent === PresentType.PRESENT);

				let lateAveragePercentage: PercentageByStudentPresent = res.totalAveragesPercentages
					.find(percentage => percentage.studentPresent === PresentType.LATE);

				let absentAveragePercentage: PercentageByStudentPresent = res.totalAveragesPercentages
					.find(percentage => percentage.studentPresent === PresentType.ABSENT);

				this.pieChartLabels = ['Presentes', 'Tardes', 'Ausentes'];
				this.pieChartData = [presentAveragePercentage.percentage, lateAveragePercentage.percentage, absentAveragePercentage.percentage];

				this.chartReady = true;
				setTimeout(() => {
					window.scrollTo(
						{ 
							top: document.getElementById("chart").offsetTop,
							behavior: 'smooth'
						}	
				)}, 0);
				
			} else {
				this.chartReady = false;
			}
	  	}, err => {
	  		console.log(err);
	  		this.chartReady = false;
	  	});
	}

	filters: any[];

	filterByCourseName(event) {
		let coursesToFilter = this.activeFilters.size > 1? this.courses : this.allCourses;
		this.courses = coursesToFilter.filter(course => course.name.indexOf(event.target.value) != -1);
		if(event.target.value.trim() === "") {
			this.activeFilters.delete('filterByName');
		} else {
			this.activeFilters.set('filterByName', true);
		}
	}

	filterByCourseYear(event) {
		let coursesToFilter = this.activeFilters.size > 1? this.courses : this.allCourses;
		if(event.target.value.trim() === ""){
			this.activeFilters.delete('filterByYear');
		} else {
			this.courses = coursesToFilter.filter(course => course.year === event.target.value);
			this.activeFilters.set('filterByYear', true);
		}
	}

	backToDashboard() {
		this.router.navigate(['/dashboard']);
	}

}
