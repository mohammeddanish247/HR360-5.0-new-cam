import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutcomesPageRoutingModule } from './outcomes-routing.module';

import { OutcomesPage } from './outcomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutcomesPageRoutingModule
  ],
  declarations: [OutcomesPage]
})
export class OutcomesPageModule {}
