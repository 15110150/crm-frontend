// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListCourseCategoryComponent } from './list-course-category/list-course-category.component';
import { AddCourseCategoryComponent } from './add-course-category/add-course-category.component';
import { UpdateCourseCategoryComponent } from './update-course-category/update-course-category.component';

import { CourseCategoryRoutingModule } from './courseCategory-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      CourseCategoryRoutingModule,
    ],
    declarations: [
        ListCourseCategoryComponent,
        AddCourseCategoryComponent,
        UpdateCourseCategoryComponent
    ]
  })
  export class CourseCategoryModule { }
  