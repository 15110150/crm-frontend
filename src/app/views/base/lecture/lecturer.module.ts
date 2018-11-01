// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListLecturerComponent } from './list-lecturer/list-lecturer.component';
import { AddLecturerComponent } from './add-lecturer/add-lecturer.component';
import { UpdateLecturerComponent } from './update-lecturer/update-lecturer.component';

import { LecturerRoutingModule } from './lecturer-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      LecturerRoutingModule
    ],
    declarations: [
        ListLecturerComponent,
        AddLecturerComponent,
        UpdateLecturerComponent
    ]
  })
  export class LecturerModule { }
  