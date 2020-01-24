import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoursePresentismData } from '../../model/presentism/presentism.model';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private http: HttpClient) { }

  getAnalysisDataByCourse(courseId: number) {
  	return this.http.get<CoursePresentismData>("http://localhost:8080/presentism-data/course/"+courseId);
  }

}
