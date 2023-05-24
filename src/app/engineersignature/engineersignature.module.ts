import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineersignaturePageRoutingModule } from './engineersignature-routing.module';
 import { EngineersignaturePage } from './engineersignature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineersignaturePageRoutingModule,
     
  ],
   declarations: [EngineersignaturePage]
})
export class EngineersignaturePageModule {}
