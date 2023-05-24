import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditappliancePageRoutingModule } from './editappliance-routing.module';

import { EditappliancePage } from './editappliance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditappliancePageRoutingModule
  ],
  declarations: [EditappliancePage]
})
export class EditappliancePageModule {}
