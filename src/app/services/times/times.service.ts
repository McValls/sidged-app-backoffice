import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from '../../model/time/time.model';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private http: HttpClient) { }

  public getTimes() {
  	let promise = new Promise((resolve, reject) => {
  		this.http.get<Array<Time>>("https://sidged-be.herokuapp.com/time").toPromise()
	  		.then(res => {
	  			resolve(res);
	  		}, err => {
	  			reject(err);
	  		})
  	});
  	return promise;
  }

}
