import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../Globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesertorsService {

  constructor(private httpClient: HttpClient) { }


  forceDesertorsMail(): Observable<any> {
    return this.httpClient.get<any>(Globals.BACKEND_HOST + "/desertors/refresh");
  }
  
}
