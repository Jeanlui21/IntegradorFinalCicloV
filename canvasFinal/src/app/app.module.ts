import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasMenuComponent } from './components/canvas-menu/canvas-menu.component';
import { CanvasHomeComponent } from './components/canvas-home/canvas-home.component';
import { CanvasTeachersComponent } from './components/canvas-teachers/canvas-teachers.component';
import { CanvasCoursesComponent } from './components/canvas-courses/canvas-courses.component';
import { CanvasChartsComponent } from './components/canvas-charts/canvas-charts.component';
import { HttpClientModule } from '@angular/common/http';
import { BarComponent } from './components/canvas-charts/bar/bar.component';
import { PieComponent } from './components/canvas-charts/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasMenuComponent,
    CanvasHomeComponent,
    CanvasTeachersComponent,
    CanvasCoursesComponent,
    CanvasChartsComponent,
    BarComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
