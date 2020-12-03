import { DesertorsService } from './../../../services/desertors/desertors.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loading: boolean = false;

  constructor(private desertorService: DesertorsService,
    private router: Router) { }

  ngOnInit() {
  }

  openUsers() {
    this.router.navigate(['/dashboard/users']);
  }

  openCareers() {
    this.router.navigate(['/dashboard/careers']);
  }

  openCourses() {
  	this.router.navigate(['/dashboard/courses']);
  }

  openSubjects() {
    this.router.navigate(['/dashboard/subjects']);
  }

  openPresentismByCourse() {
    this.router.navigate(['/presentism']);
  }

  forceUpdateDesertors() {
    this.loading = true;
    this.desertorService.forceDesertorsMail().subscribe(res => {
      this.loading = false;
      alert('Se ha enviado el correo correspondiente.');
    }, err => {
      this.loading = false
      console.log(err);
      alert('No se pudo enviar el correo. Pruebe nuevamente más tarde.');
    });
  }

}
