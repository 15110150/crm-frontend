import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListPotentialStudentComponent } from './list-potential-student/list-potential-student.component';
import { AddPotentialStudentComponent } from './add-potential-student/add-potential-student.component';
import { UpdatePotentialStudentComponent } from './update-potential-student/update-potential-student.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListPotentialStudentComponent
  },
  {
    path: 'list/add',
    component: AddPotentialStudentComponent
  },
  {
    path: 'list/edit/:id',
    component: UpdatePotentialStudentComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PotentialStudentRoutingModule {}
  