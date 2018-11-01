// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

import { StudentRoutingModule } from './student-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      StudentRoutingModule,
    ],
    declarations: [
      ListStudentComponent,
      AddStudentComponent,
      UpdateStudentComponent
    ]
  })
  export class StudentModule { }
  