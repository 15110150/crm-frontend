// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

import { ListCourseComponent } from './list-course/list-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

import { CourseRoutingModule } from './course-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      CourseRoutingModule,
      MatTabsModule
    ],
    declarations: [
        ListCourseComponent,
        AddCourseComponent,
        UpdateCourseComponent
    ]
  })
  export class CourseModule { }
  