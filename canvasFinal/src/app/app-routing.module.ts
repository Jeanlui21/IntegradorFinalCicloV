import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasHomeComponent } from './components/canvas-home/canvas-home.component';
import { CanvasCoursesComponent } from './components/canvas-courses/canvas-courses.component';
import { CanvasTeachersComponent } from './components/canvas-teachers/canvas-teachers.component';
import { CanvasChartsComponent } from './components/canvas-charts/canvas-charts.component';
const routes: Routes = [

{ path:"home", component: CanvasHomeComponent},
{ path:"courses", component: CanvasCoursesComponent },
{ path:"teachers", component: CanvasTeachersComponent },
{ path:"graphics/:id", component: CanvasChartsComponent},

{ path:"**", redirectTo:"home" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
