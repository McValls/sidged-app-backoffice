import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course, Shift } from '../../model/course/course.model';
import { Period, PeriodType } from '../../model/period/period.model';
import { Teacher } from '../../model/teacher/teacher.model';
import { Student } from '../../model/student/student.model';
import { Time } from '../../model/time/time.model';
import { Career } from '../../model/career/career.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
  	private http: HttpClient
  ){}

  public getAllCourses()  {
  	let promise = new Promise((resolve, reject) => {
  		let observable = this.http.get<Array<Course>>("https://sidged-be.herokuapp.com/course");
	    observable.toPromise()
	  		.then(res => {
	  			resolve(res);
	  		}, err => {
	  			reject(err);
	  		});

	  	});
  	return promise;
  }

  public addStudent(courseId: number, student: Student){
    return this.updateStudent(courseId, student, "ADD");
  }

  public removeStudent(courseId: number, student: Student){
    return this.updateStudent(courseId, student, "REMOVE");
  }

  private updateStudent(courseId: number, student: Student, action: string){
    return new Promise((resolve, reject) => {
      this.http.put<Course>("https://sidged-be.herokuapp.com/course/"+courseId+"/student?action="+action, student)
        .toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
    
  public assignTeacher(courseId: number, teacher: Teacher) {
    return this.updateTeacher(courseId, teacher, "ADD");
  }

  public removeTeacher(courseId: number, teacher: Teacher) {
    return this.updateTeacher(courseId, teacher, "REMOVE");
  }

  private updateTeacher(courseId: number, teacher: Teacher, action: string){
    return new Promise((resolve, reject) => {
      this.http.put<Course>("https://sidged-be.herokuapp.com/course/"+courseId+"/teacher?action="+action, teacher)
        .toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  public createCourse(name: string, shift: Shift, year: number, periodType: PeriodType, periodNumber: number,
    timeSinceId: number, timeUntilId: number, careerId: number, chair: string){

    let data = {
      name: name,
      shift: shift,
      year: year,
      periodType: periodType,
      periodNumber: periodNumber,
      timeSinceId: timeSinceId,
      timeUntilId: timeUntilId,
      careerId: careerId,
      chair: chair
    }

    return new Promise((resolve, reject) => {
      this.http.post("https://sidged-be.herokuapp.com/course", data)
        .toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });

  }

  public getTeachers(courseId: number) {
    return new Promise((resolve, reject) => {
      this.http.get<Array<Teacher>>("https://sidged-be.herokuapp.com/course/"+courseId+"/teacher")
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

  public getStudents(courseId: number) {
    return new Promise((resolve, reject) => {
      this.http.get<Array<Student>>("https://sidged-be.herokuapp.com/course/"+courseId+"/student")
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
        return "Mañana";
      case Shift.AFTERNOON:
        return "Tarde";
      case Shift.NIGHT:
        return "Noche";
    }
  }

  public getPeriodType(periodType: PeriodType){
    switch(periodType) {
      case PeriodType.QUARTERLY:
        return "Cuatrimestral";
      case PeriodType.BIANNUAL:
        return "Semestral";
      case PeriodType.ANNUAL:
        return "Anual";
      case PeriodType.SUMMER:
        return "De Verano";
    }
  }

  public getPeriod(period: Period){
    let periodString = "";
    switch(period.periodType){
      case PeriodType.QUARTERLY:
        return "Cuatrimestre " + period.number;
      case PeriodType.BIANNUAL:
        return "Semestre " + period.number;
      case PeriodType.ANNUAL:
        return "Anual";
      case PeriodType.SUMMER:
        return "Verano";
    }
  }

}
