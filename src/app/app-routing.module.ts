import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } 		from './app.component';
import { LoginComponent } 		from './login/login.component';
import { SignUpComponent } 		from './sign-up/sign-up.component';
import { DashboardComponent }	from './dashboard/dashboard.component';
import { UsersComponent }	from './users/users.component';
import { CoursesComponent }	from './courses/courses.component';
import { CourseDetailComponent }	from './courses/course-detail/course-detail.component';
import { CourseCreateComponent }	from './courses/course-create/course-create.component';
import { PresentismByCourseComponent }	from './presentism/presentism-by-course.component';
import { AuthGuard } 			from './auth/auth-guard';

const routes: Routes = [
		{path: 'login', component: LoginComponent},
		{path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard/users', component: UsersComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard/courses', component: CoursesComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard/courses/detail/id/:id/year/:year/shift/:shift/name/:name', component: CourseDetailComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard/courses/create', component: CourseCreateComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'presentism/by-course', component: PresentismByCourseComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}}

];

@NgModule({
	imports: [
    RouterModule.forRoot(routes)
    ],	
  	exports: [ RouterModule ]
})
export class AppRoutingModule {

}