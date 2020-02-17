import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoursePresentismData, PercentageByStudentPresent, PresentismAnalysisData } from '../../model/presentism/presentism.model';
import { Globals } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private http: HttpClient) { }

  getAnalysisDataByCourse(courseId: number) {
  	return this.http.get<CoursePresentismData>(Globals.BACKEND_HOST + "/presentism-data/course/"+courseId);
  }

  getAnalysisDataByStudent(userId: number) {
    return this.http.get<PresentismAnalysisData[]>(Globals.BACKEND_HOST + "/presentism-data/student/"+userId+"/year/"+2020);
  }

}
