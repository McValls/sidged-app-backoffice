import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students/students.service';
import { AnalysisService } from '../../services/analysis/analysis.service';
import { Student } from '../../model/student/student.model';

@Component({
  selector: 'presentism-by-student',
  templateUrl: './presentism-by-student.component.html',
  styleUrls: ['./presentism-by-student.component.css']
})
export class PresentismByStudentComponent implements OnInit {

  students: Array<Student> = new Array<Student>();
  loadingStudents: boolean = false;

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

  constructor(private studentsService: StudentsService,
    private analysisService: AnalysisService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  seePresentism($event): void {
    console.log($event.data);
    this.analysisService.getAnalysisDataByStudent($event.data.id).subscribe(res => {
      console.log(res);
    });
  }

  private getAllStudents() {
  	this.loadingStudents = true;
  	this.studentsService.getAllStudents()
  		.then((data: Array<Student>) => {
  			this.students = data;
 				this.loadingStudents = false;
  		}, error => {
  			console.log("ERROR: " + JSON.stringify(error));
  		});
  }

}
