import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from '../../model/time/time.model';
import { Globals } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private http: HttpClient) { }

  public getTimes() {
  	let promise = new Promise((resolve, reject) => {
  		this.http.get<Array<Time>>(Globals.BACKEND_HOST + "/time").toPromise()
	  		.then(res => {
	  			resolve(res);
	  		}, err => {
	  			reject(err);
	  		})
  	});
  	return promise;
  }

}
