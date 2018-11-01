import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListCourseComponent } from './list-course/list-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListCourseComponent
  },
  {
    path: 'list/add',
    component: AddCourseComponent
  },
  {
    path: 'list/edit/:id',
    component: UpdateCourseComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CourseRoutingModule {}
  