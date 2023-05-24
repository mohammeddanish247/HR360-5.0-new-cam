import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerinstallPageRoutingModule } from './boilerinstall-routing.module';

import { BoilerinstallPage } from './boilerinstall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoilerinstallPageRoutingModule
  ],
  declarations: [BoilerinstallPage]
})
export class BoilerinstallPageModule {}
