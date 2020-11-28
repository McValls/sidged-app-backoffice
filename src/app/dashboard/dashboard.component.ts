import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { UserData }  from '../model/user-data.model';
import { Router } from '@angular/router';
import { DesertorsService } from '../services/desertors/desertors.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loading: boolean = false;

  constructor(private loginService: LoginService,
    private desertorService: DesertorsService,
    private router: Router) { }

  ngOnInit() {
  }

  openUsers() {
    this.router.navigate(['/dashboard/users']);
  }

  openCourses() {
  	this.router.navigate(['/dashboard/courses']);
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
