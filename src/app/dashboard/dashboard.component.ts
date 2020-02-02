import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { UserData }  from '../model/user-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  constructor(private loginService: LoginService, private router: Router) { }

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

}
