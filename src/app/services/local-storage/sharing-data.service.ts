import { Injectable } from '@angular/core';
import { UserData }	from '../../model/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  constructor() { }

  public storeLoggedUser(loggedUser: UserData) {
  	localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
  }

  public getLoggedUser(): UserData {
  	return <UserData> JSON.parse(localStorage.getItem('loggedUser'));
  }

  public cleanLoggedUser() {
  	localStorage.removeItem('loggedUser');
  }

  public storeToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  public getJwtToken() {
    return localStorage.getItem('jwtToken');
  }
}
