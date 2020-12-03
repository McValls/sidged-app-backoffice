import { Observable } from 'rxjs';
import { Globals } from './../Globals';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../../model/subject/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Subject>> {
    return this.httpClient.get<Array<Subject>>(Globals.BACKEND_HOST + '/subject');
  }

  create(code: string, name: string, careerCode: string): Observable<void> {
    const subjectToCreate = {code, name, careerCode};
    return this.httpClient.post<void>(Globals.BACKEND_HOST + '/subject', subjectToCreate);
  }

  update(code: string, name: string): Observable<void> {
    const updateInfo = {name};
    return this.httpClient.put<void>(Globals.BACKEND_HOST + `/subject/${code}`, updateInfo);
  }
}
