import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerinstallnextPageRoutingModule } from './boilerinstallnext-routing.module';

import { BoilerinstallnextPage } from './boilerinstallnext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoilerinstallnextPageRoutingModule
  ],
  declarations: [BoilerinstallnextPage]
})
export class BoilerinstallnextPageModule {}
