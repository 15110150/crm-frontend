import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { SmsCampaignComponent } from './sms-campaign/sms-campaign.component';
import { DetailCampaignComponent } from './detail-campaign/detail-campaign.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lí makerting'
    },
    children: [
      {
        path: 'app-email-campaign',
        component: EmailCampaignComponent,
        data: {
          title: 'Quản lí chiến dịch Email'
        }
      },
      {
        path: 'app-sms-campaign',
        component: SmsCampaignComponent,
        data: {
          title: 'Quản lý chiến dịch SMS'
        }
      },
      {
        path: 'app-detail-campaign',
        component: DetailCampaignComponent,
        data: {
          title: 'Kế hoạch chiến dịch'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule {}
