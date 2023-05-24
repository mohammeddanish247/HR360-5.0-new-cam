import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitesurveypicsPageRoutingModule } from './sitesurveypics-routing.module';

import { SitesurveypicsPage } from './sitesurveypics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitesurveypicsPageRoutingModule
  ],
  declarations: [SitesurveypicsPage]
})
export class SitesurveypicsPageModule {}
