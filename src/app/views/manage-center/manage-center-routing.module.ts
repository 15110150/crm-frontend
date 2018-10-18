import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeKindComponent } from './employee-kind/employee-kind.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lí trung tâm'
    },
    children: [
      {
        path: 'app-employee',
        component: EmployeeComponent,
        data: {
          title: 'Quản lí nhân viên'
        }
      },
      {
        path: 'app-employee-kind',
        component: EmployeeKindComponent,
        data: {
          title: 'Quản lí loại nhân viên'
        }
      },
      {
        path: 'app-invoice',
        component: InvoiceComponent,
        data: {
          title: 'Góa đơn thu học phí'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCenterRoutingModule {}
