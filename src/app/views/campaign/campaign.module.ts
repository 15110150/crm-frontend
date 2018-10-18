// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MglTimelineModule } from 'angular-mgl-timeline';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';

import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { SmsCampaignComponent } from './sms-campaign/sms-campaign.component';
import { DetailCampaignComponent } from './detail-campaign/detail-campaign.component';

// Theme Routing
import { CampaignRoutingModule } from './campaign-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ChartsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MglTimelineModule
  ],
  declarations: [
    EmailCampaignComponent,
    SmsCampaignComponent,
    DetailCampaignComponent
  ]
})
export class CampaignModule { }
