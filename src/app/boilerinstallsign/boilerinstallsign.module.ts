import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerinstallsignPageRoutingModule } from './boilerinstallsign-routing.module';

import { BoilerinstallsignPage } from './boilerinstallsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoilerinstallsignPageRoutingModule
  ],
  declarations: [BoilerinstallsignPage]
})
export class BoilerinstallsignPageModule {}
