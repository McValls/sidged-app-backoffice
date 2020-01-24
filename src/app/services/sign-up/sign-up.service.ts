import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpData } from '../../rest/sign-up-data';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  public signUp(data: SignUpData) {
    let promise = new Promise((resolve, reject) => {
        this.http.post("http://localhost:8080/login/signup", data).toPromise()
          .then(res => {
            resolve();
          }, err => {
            reject(err);
          });
    });
    return promise;
  }

}
