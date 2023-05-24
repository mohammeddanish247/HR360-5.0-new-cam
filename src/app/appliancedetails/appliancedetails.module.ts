import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliancedetailsPageRoutingModule } from './appliancedetails-routing.module';

import { AppliancedetailsPage } from './appliancedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliancedetailsPageRoutingModule
  ],
  declarations: [AppliancedetailsPage]
})
export class AppliancedetailsPageModule {}
