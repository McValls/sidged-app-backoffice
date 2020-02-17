import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from '../../model/teacher/teacher.model';
import { Observable } from 'rxjs';
import { Globals } from '../Globals';


@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(
  	private http: HttpClient
  ){}

  public getAllTeachers()  {
  	let promise = new Promise((resolve, reject) => {
  		let observable = this.http.get<Array<Teacher>>(Globals.BACKEND_HOST + "/teacher");
  		
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

      let observable = this.http.put<Teacher>(Globals.BACKEND_HOST + "/teacher/" + teacher.id, teacher);
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
