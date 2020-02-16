import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Career } from '../../model/career/career.model';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  constructor(
  	private http: HttpClient
  ){}

  public getAllCareers()  {
  	let promise = new Promise((resolve, reject) => {
  		let observable = this.http.get<Array<Career>>("https://sidged-be.herokuapp.com/career");
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
