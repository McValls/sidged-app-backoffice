import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from '../../model/teacher/teacher.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(
  	private http: HttpClient
  ){}

  public getAllTeachers()  {
  	let promise = new Promise((resolve, reject) => {
  		let observable = this.http.get<Array<Teacher>>("http://localhost:8080/teacher");
  		
      observable.toPromise()
  		.then(res => {
  			resolve(res);
  		}, err => {
  			reject(err);
  		});

  	});
  	return promise;
  }

  public update(teacher: Teacher) {
    let promise = new Promise((resolve, reject) => {

      let observable = this.http.put<Teacher>("http://localhost:8080/teacher/" + teacher.id, teacher);
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
