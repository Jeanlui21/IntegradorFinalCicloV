import { Component, OnInit } from '@angular/core';
import { CanvasLocal } from 'src/app/services/canvaslocal.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-canvas-charts',
  templateUrl: './canvas-charts.component.html',
  styleUrls: ['./canvas-charts.component.scss']
})
export class CanvasChartsComponent implements OnInit {
  courseId = '';
  courseName: string;
  marks: number[] = [];
  allStudentsData: any[] = [];
  allStudentsDataForExcel: any[] = [];
  allStudentsSuccess: any[] = [];
  allStudentsFail: any[] = [];
  average: number;


  datos: any;

  constructor(private localService: CanvasLocal, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {this.courseId = params.get('id'); });
    this.courseName = this.localService.getcourseName();

    this.localService.getCourseData(this.courseId).subscribe((response: any) => {
      this.datos = response;
// tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < response.length; i++ ) {

        const marksBrute = Math.round(response[i].grades.current_score * 0.20);
// Objeto Notas
        this.marks.push(marksBrute);
// Objeto Todos Estudiantes
        this.allStudentsData.push({ nombre: response[i].user.name, notas: marksBrute });
// tslint:disable-next-line: only-arrow-functions CALCULO DE PROMEDIO
        this.average =  ( (this.marks.reduce( function(a, b) { return a + b; })) / this.marks.length);
        this.allStudentsDataForExcel.push({ nombre: response[i].user.name, notas: marksBrute});
        if (marksBrute >= 13 ) {
          this.allStudentsSuccess.push({ nombre: response[i].user.name, notas: marksBrute });
          this.allStudentsDataForExcel.push({ aprobados: response[i].user.name});
        } else {
          this.allStudentsFail.push({ nombre: response[i].user.name, notas: marksBrute });
          this.allStudentsDataForExcel.push({ desaprobados: response[i].user.name});
        }
      }
      this.allStudentsDataForExcel.push({ promedio: this.average});
    });
  }

    exportAsXLSX() {
    this.localService.exportAsExcelFile(this.allStudentsDataForExcel, this.courseName);
 }
}
