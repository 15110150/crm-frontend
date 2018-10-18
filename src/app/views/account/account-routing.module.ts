import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccountComponent } from './user-account/user-account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { WorkCalendarComponent } from './work-calendar/work-calendar.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tài khoản'
    },
    children: [
      {
        path: 'app-user-account',
        component: UserAccountComponent,
        data: {
          title: 'Tài khoản cá nhân'
        }
      },
      {
        path: 'app-manage-account',
        component: ManageAccountComponent,
        data: {
          title: 'Quản lí tài khoản'
        }
      },
      {
        path: 'app-work-calendar',
        component: WorkCalendarComponent,
        data: {
          title: 'Quản lí lịch làm việc'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
