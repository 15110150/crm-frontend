import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { LectureComponent } from './lecture/lecture.component';
import { PotentialStudentComponent } from './potential-student/potential-student.component';
import { StudentComponent } from './student/student.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lí khóa học'
    },
    children: [
      {
        path: 'app-potential-student',
        component: PotentialStudentComponent,
        data: {
          title: 'Quản lí học viên tiềm năng'
        }
      },
      {
        path: 'app-student',
        component: StudentComponent,
        data: {
          title: 'Quản lý học viên'
        }
      },
      {
        path: 'app-lecturer',
        component: LectureComponent,
        data: {
          title: 'Quản lý giảng viên'
        }
      },
      {
        path: 'app-course',
        component: CourseComponent,
        data: {
          title: 'Quản lý khóa học'
        }
      },
      {
        path: 'app-course-category',
        component: CourseCategoryComponent,
        data: {
          title: 'Quản lí loại khóa học'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
