// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { UserAccountComponent } from './user-account/user-account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { WorkCalendarComponent } from './work-calendar/work-calendar.component';

// Theme Routing
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    AccountRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule
  ],
  declarations: [
    UserAccountComponent,
    ManageAccountComponent,
    WorkCalendarComponent
  ]
})
export class AccountModule { }
