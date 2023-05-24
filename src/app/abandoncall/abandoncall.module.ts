import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AbandoncallPageRoutingModule } from './abandoncall-routing.module';

import { AbandoncallPage } from './abandoncall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbandoncallPageRoutingModule
  ],
  declarations: [AbandoncallPage]
})
export class AbandoncallPageModule {}
