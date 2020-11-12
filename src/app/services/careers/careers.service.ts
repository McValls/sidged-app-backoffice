import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Career } from '../../model/career/career.model';
import { Globals } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  constructor(
  	private http: HttpClient
  ){}

  public getAllCareers()  {
  	const promise = new Promise((resolve, reject) => {
		const observable = this.http.get<Array<Career>>(Globals.BACKEND_HOST + '/career');
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
