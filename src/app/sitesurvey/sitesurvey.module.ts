import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitesurveyPageRoutingModule } from './sitesurvey-routing.module';

import { SitesurveyPage } from './sitesurvey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitesurveyPageRoutingModule
  ],
  declarations: [SitesurveyPage]
})
export class SitesurveyPageModule {}
