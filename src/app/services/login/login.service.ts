import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserData }	from '../../model/user/user-data.model';
import { Observable } from 'rxjs';
import { SharingDataService } from '../local-storage/sharing-data.service';
import { Globals } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = Globals.BACKEND_HOST + "/login";
  private loggedUser: UserData;

  constructor(private http: HttpClient, private sharingDataService: SharingDataService) {
  }

  public login(username: string, password: string) {
    let userData: UserData = new UserData(username, password);
    let promise = new Promise((resolve, reject) => {
      let observable = this.http.post<UserData>(this.url, userData, {observe: 'response'});
      observable.toPromise()
      .then(
        (res: HttpResponse<UserData>) => {
          let headers = res.headers;
          this.sharingDataService.storeToken(headers.get("Authorization"));
          this.loggedUser = res.body;
          this.sharingDataService.storeLoggedUser(this.loggedUser);
          resolve();
        },
        err => {
          this.logout();
          reject(err);
        }
      );
    });
    return promise;
  }

  public getLoggedUser(): UserData {
    if(!this.loggedUser) {
      this.loggedUser = this.sharingDataService.getLoggedUser();
    }
    return this.loggedUser;
  }

  public logout() {
    this.loggedUser = null;
    this.sharingDataService.cleanLoggedUser();
  }
}
