// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CourseComponent } from './course/course.component';

// Forms Component
import { CourseCategoryComponent } from './course-category/course-category.component';

import { LectureComponent } from './lecture/lecture.component';
import { PotentialStudentComponent } from './potential-student/potential-student.component';
import { StudentComponent } from './student/student.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component

// Collapse Component

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    CourseComponent,
    CourseCategoryComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    LectureComponent,
    StudentComponent,
    PotentialStudentComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent
  ]
})
export class BaseModule { }
