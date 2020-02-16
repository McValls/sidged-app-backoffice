import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoursePresentismData, PercentageByStudentPresent, PresentismAnalysisData } from '../../model/presentism/presentism.model';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private http: HttpClient) { }

  getAnalysisDataByCourse(courseId: number) {
  	return this.http.get<CoursePresentismData>("https://sidged-be.herokuapp.com/presentism-data/course/"+courseId);
  }

  getAnalysisDataByStudent(userId: number) {
    return this.http.get<PresentismAnalysisData[]>("https://sidged-be.herokuapp.com/presentism-data/student/"+userId+"/year/"+2020);
  }

}
