// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListPotentialStudentComponent } from './list-potential-student/list-potential-student.component';
import { AddPotentialStudentComponent } from './add-potential-student/add-potential-student.component';
import { UpdatePotentialStudentComponent } from './update-potential-student/update-potential-student.component';

import { PotentialStudentRoutingModule } from './potentialStudent-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      PotentialStudentRoutingModule,
    ],
    declarations: [
        ListPotentialStudentComponent,
        AddPotentialStudentComponent,
        UpdatePotentialStudentComponent
    ]
  })
  export class PotentialStudentModule { }
  