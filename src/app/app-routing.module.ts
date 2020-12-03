import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { UsersComponent } from './modules/user/users/users.component';
import { PresentismComponent } from './modules/presentism/presentism/presentism.component';
import { CourseCreateComponent } from './modules/course/courses/course-create/course-create.component';
import { CourseDetailComponent } from './modules/course/courses/course-detail/course-detail.component';
import { CoursesComponent } from './modules/course/courses/courses.component';
import { CareersComponent } from './modules/career/careers/careers.component';
import { LoginComponent } from './modules/login/login/login.component';
import { SubjectsComponent } from './modules/subject/subjects/subjects.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } 		from './app.component';
import { SignUpComponent } 		from './modules/login/sign-up/sign-up.component';
import { AuthGuard } 			from './auth/auth-guard';

const routes: Routes = [
		{path: '', component: LoginComponent},
		{path: 'login', component: LoginComponent},
		{path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard/users', component: UsersComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard/courses', component: CoursesComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
    {path: 'dashboard/courses/detail/code/:code/year/:year/shift/:shift/name/:name', component: CourseDetailComponent,
      canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
		{path: 'dashboard/courses/create', component: CourseCreateComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
    {path: 'presentism', component: PresentismComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
    {path: 'dashboard/careers', component: CareersComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}},
    {path: 'dashboard/subjects', component: SubjectsComponent, canActivate: [AuthGuard], data: {roles: ['BACKOFFICE']}}

];

@NgModule({
	imports: [
    RouterModule.forRoot(routes)
    ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {

}
