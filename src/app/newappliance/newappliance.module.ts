import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewappliancePageRoutingModule } from './newappliance-routing.module';

import { NewappliancePage } from './newappliance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewappliancePageRoutingModule
  ],
  declarations: [NewappliancePage]
})
export class NewappliancePageModule {}
