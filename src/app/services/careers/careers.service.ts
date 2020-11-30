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
  ) { }

  getAllCareers(): Promise<Array<Career>> {
    const promise = new Promise<Array<Career>>((resolve, reject) => {
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

  create(code: string, name: string) {
    const career = {code, name};
    return new Promise<any>((resolve, reject) => {
      this.http.post<any>(Globals.BACKEND_HOST + '/career', career)
        .subscribe(res => resolve(res), err => reject(err));
    })
  }

  update(id: number, name: string): Promise<Career> {
    const career = { name };
    return new Promise<Career>((resolve, reject) => {
      this.http.put<Career>(Globals.BACKEND_HOST + '/career/' + id, career)
        .subscribe(res => resolve(res), err => reject(err));
    });
  }
}
