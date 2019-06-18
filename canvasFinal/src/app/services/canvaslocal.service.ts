import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanvasLocal {
  courseName: string;
  courseId: number;

  constructor(private Http: HttpClient) { }

  getCanvasCourses() {
    const pathUrl = 'http://3.19.68.210/api/courses/';
    return this.Http.get(pathUrl);
  }

  getcourseName() {
    return this.courseName;
  }

  getCourseData( courseId ) {
    return this.Http.get('http://3.19.68.210/api/courses/' + courseId + '/enrollments');
  }

  setcourseParameters(courseId, courseName) {
    this.courseName = courseName;
    this.courseId = courseId;
  }
}
