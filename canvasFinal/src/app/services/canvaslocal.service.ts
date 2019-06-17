import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanvasLocal {
  courseName: string;
  courseId: number;

  constructor(private Http: HttpClient) { }



  setcourseParameters(courseId, courseName) {
    this.courseName = courseName;
    this.courseId = courseId;
  }
}
