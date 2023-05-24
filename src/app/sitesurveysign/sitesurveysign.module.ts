import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitesurveysignPageRoutingModule } from './sitesurveysign-routing.module';

import { SitesurveysignPage } from './sitesurveysign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitesurveysignPageRoutingModule
  ],
  declarations: [SitesurveysignPage]
})
export class SitesurveysignPageModule {}
