import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students/students.service';
import { AnalysisService } from '../../services/analysis/analysis.service';
import { Student } from '../../model/student/student.model';
import { PresentType } from '../../model/presentism/presentism.model';
import { Router } from '@angular/router';

@Component({
  selector: 'presentism-by-student',
  templateUrl: './presentism-by-student.component.html',
  styleUrls: ['./presentism-by-student.component.css']
})
export class PresentismByStudentComponent implements OnInit {

  students: Array<Student> = new Array<Student>();
  loadingStudents: boolean = false;
  visible = false;

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
    private analysisService: AnalysisService,
    private router: Router) { }

  ngOnInit() {
    this.getAllStudents();
  }

  makeVisible() : void {
    this.visible = !this.visible;
  }

  seePresentism($event): void {
    console.log($event.data);
    this.analysisService.getAnalysisDataByStudent($event.data.id).subscribe(res => {
      console.log(res);
        if(res != null){
          this.barChartLabels = [];
          this.barChartData = [
            {data: [], label: '% Presente', backgroundColor: 'green'},
            {data: [], label: '% Tarde', backgroundColor: 'yellow'},
            {data: [], label: '% Ausente', backgroundColor: 'red'},
          ]
          res.forEach(presentismData => {
            this.barChartLabels.push(presentismData.courseName + " " + presentismData.courseYear + " (" + presentismData.numberOfClasses + " clases)");
            this.barChartData[0]['data'].push(
              presentismData.percentagesByStudentPresent
                .find(percentage => percentage.studentPresent === PresentType.PRESENT).percentage)
|
            this.barChartData[1]['data'].push(
              presentismData.percentagesByStudentPresent
                .find(percentage => percentage.studentPresent === PresentType.LATE).percentage)

            this.barChartData[2]['data'].push(
              presentismData.percentagesByStudentPresent
                .find(percentage => percentage.studentPresent === PresentType.ABSENT).percentage)
          });


          /*let presentAveragePercentage: PercentageByStudentPresent = res.totalAveragesPercentages
            .find(percentage => percentage.studentPresent === PresentType.PRESENT);

          let lateAveragePercentage: PercentageByStudentPresent = res.totalAveragesPercentages
            .find(percentage => percentage.studentPresent === PresentType.LATE);

          let absentAveragePercentage: PercentageByStudentPresent = res.totalAveragesPercentages
            .find(percentage => percentage.studentPresent === PresentType.ABSENT);
          
          this.pieChartLabels = ['Presentes', 'Tardes', 'Ausentes'];
          this.pieChartData = [presentAveragePercentage.percentage, lateAveragePercentage.percentage, absentAveragePercentage.percentage];
          */
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

  backToDashboard() {
		this.router.navigate(['/dashboard']);
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
