import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListLecturerComponent } from './list-lecturer/list-lecturer.component';
import { AddLecturerComponent } from './add-lecturer/add-lecturer.component';
import { UpdateLecturerComponent } from './update-lecturer/update-lecturer.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListLecturerComponent
  },
  {
    path: 'list/add',
    component: AddLecturerComponent
  },
  {
    path: 'list/edit/:id',
    component: UpdateLecturerComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LecturerRoutingModule {}
  