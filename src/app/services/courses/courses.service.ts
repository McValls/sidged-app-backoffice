import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course, Shift } from '../../model/course/course.model';
import { Period, PeriodType } from '../../model/period/period.model';
import { Teacher } from '../../model/teacher/teacher.model';
import { Student } from '../../model/student/student.model';
import { Time } from '../../model/time/time.model';
import { Career } from '../../model/career/career.model';
import { Globals } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
  	private http: HttpClient
  ){}

  public getAllCourses()  {
  	const promise = new Promise((resolve, reject) => {
  		const observable = this.http.get<Array<Course>>(Globals.BACKEND_HOST + '/course');
	    observable.toPromise()
	  		.then(res => {
	  			resolve(res);
	  		}, err => {
	  			reject(err);
	  		});

	  	});
  	return promise;
  }

  public addStudent(courseCode: string, student: Student){
    return this.updateStudent(courseCode, student, 'ADD');
  }

  public removeStudent(courseCode: string, student: Student){
    return this.updateStudent(courseCode, student, 'REMOVE');
  }

  private updateStudent(courseCode: string, student: Student, action: string){
    return new Promise((resolve, reject) => {
      this.http.put<Course>(Globals.BACKEND_HOST + '/student/course/'+courseCode+'?action='+action, student)
        .toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  public assignTeacher(courseCode: string, teacher: Teacher) {
    return this.updateTeacher(courseCode, teacher, 'ADD');
  }

  public removeTeacher(courseCode: string, teacher: Teacher) {
    return this.updateTeacher(courseCode, teacher, 'REMOVE');
  }

  private updateTeacher(courseCode: string, teacher: Teacher, action: string){
    return new Promise((resolve, reject) => {
      this.http.put<Course>(Globals.BACKEND_HOST + '/teacher/course/'+courseCode+'?action='+action, teacher)
        .toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  public createCourse(name: string, shift: Shift, year: number, periodType: PeriodType, periodNumber: number,
    courseCode: string, timeSinceId: number, timeUntilId: number, careerCode: string, chair: string){

    const data = {
      name,
      shift,
      year,
      periodType,
      periodNumber,
      courseCode,
      timeSinceId,
      timeUntilId,
      careerCode,
      chair
    }

    return new Promise((resolve, reject) => {
      this.http.post(Globals.BACKEND_HOST + '/course', data)
        .toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });

  }

  public getTeachers(courseCode: string) {
    return new Promise((resolve, reject) => {
      this.http.get<Array<Teacher>>(Globals.BACKEND_HOST + '/teacher/course/'+courseCode)
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  public getStudents(courseCode: string) {
    return new Promise((resolve, reject) => {
      this.http.get<Array<Student>>(Globals.BACKEND_HOST + '/student/course/'+courseCode)
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  public getShift(shift: Shift){
    switch(shift) {
      case Shift.MORNING:
        return 'Mañana';
      case Shift.AFTERNOON:
        return 'Tarde';
      case Shift.NIGHT:
        return 'Noche';
    }
  }

  public getPeriodType(periodType: PeriodType){
    switch(periodType) {
      case PeriodType.QUARTERLY:
        return 'Cuatrimestral';
      case PeriodType.BIANNUAL:
        return 'Semestral';
      case PeriodType.ANNUAL:
        return 'Anual';
      case PeriodType.SUMMER:
        return 'De Verano';
    }
  }

  public getPeriod(period: Period){
    switch(period.periodType){
      case PeriodType.QUARTERLY:
        return 'Cuatrimestre ' + period.number;
      case PeriodType.BIANNUAL:
        return 'Semestre ' + period.number;
      case PeriodType.ANNUAL:
        return 'Anual';
      case PeriodType.SUMMER:
        return 'Verano';
    }
  }

}
