import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../../model/student/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
  	private http: HttpClient
  ){}

  public getAllStudents()  {
  	let promise = new Promise((resolve, reject) => {
  		let observable = this.http.get<Array<Student>>("https://sidged-be.herokuapp.com/student");
  		
      observable.toPromise()
  		.then(res => {
  			resolve(res);
  		}, err => {
  			reject(err);
  		});

  	});
  	return promise;
  }

  public update(student: Student) {
    let promise = new Promise((resolve, reject) => {

      let observable = this.http.put<Student>("https://sidged-be.herokuapp.com/student/" + student.id, student);
      observable.toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
    return promise;
  }
}
