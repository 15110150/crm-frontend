import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        path: '',
        data: {
          title: 'Quản lí học viên tiềm năng'
        },
        children: [
          {
            path: 'potentialStudent',
            loadChildren: './potentialStudent/potentialStudent.module#PotentialStudentModule'
          },
        ]
      },
      {
        path: '',
        data: {
          title: 'Quản lý học viên'
        },
        children: [
          {
            path: 'student',
            loadChildren: './student/student.module#StudentModule'
          },
        ]
      },
      {
        path: '',
        data: {
          title: 'Quản lý giảng viên'
        },
        children: [
          {
            path: 'lecturer',
            loadChildren: './lecture/lecturer.module#LecturerModule'
          },
        ]
      },
      {
        path: '',
        data: {
          title: 'Quản lý khóa học'
        },
        children: [
          {
            path: 'course',
            loadChildren: './course/course.module#CourseModule'
          },
        ]
      },
      {
        path: '',
        data: {
          title: 'Quản lí loại khóa học'
        },
        children: [
          {
            path: 'courseCategory',
            loadChildren: './courseCategory/courseCategory.module#CourseCategoryModule'
          },
        ]
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
