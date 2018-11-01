import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListStudentComponent
  },
  {
    path: 'list/add',
    component: AddStudentComponent
  },
  {
    path: 'list/edit/:id',
    component: UpdateStudentComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StudentRoutingModule {}
  