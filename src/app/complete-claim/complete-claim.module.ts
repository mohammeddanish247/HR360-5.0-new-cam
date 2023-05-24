import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteClaimPageRoutingModule } from './complete-claim-routing.module';

import { CompleteClaimPage } from './complete-claim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteClaimPageRoutingModule
  ],
  declarations: [CompleteClaimPage]
})
export class CompleteClaimPageModule {}
