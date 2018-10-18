// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeKindComponent } from './employee-kind/employee-kind.component';
import { InvoiceComponent } from './invoice/invoice.component';

// Theme Routing
import { ManageCenterRoutingModule } from './manage-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ManageCenterRoutingModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeKindComponent,
    InvoiceComponent
  ]
})
export class ManageCenterModule { }
