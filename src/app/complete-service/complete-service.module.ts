import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteServicePageRoutingModule } from './complete-service-routing.module';

import { CompleteServicePage } from './complete-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteServicePageRoutingModule
  ],
  declarations: [CompleteServicePage]
})
export class CompleteServicePageModule {}
