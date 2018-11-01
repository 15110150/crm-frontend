import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListCourseCategoryComponent } from './list-course-category/list-course-category.component';
import { AddCourseCategoryComponent } from './add-course-category/add-course-category.component';
import { UpdateCourseCategoryComponent } from './update-course-category/update-course-category.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListCourseCategoryComponent
  },
  {
    path: 'list/add',
    component: AddCourseCategoryComponent
  },
  {
    path: 'list/edit/:id',
    component: UpdateCourseCategoryComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CourseCategoryRoutingModule {}
  