import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IontestPageRoutingModule } from './iontest-routing.module';
import { DynamicFormsIonicUIModule } from '@ng-dynamic-forms/ui-ionic';

import { IontestPage } from './iontest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IontestPageRoutingModule,
    DynamicFormsIonicUIModule
  ],
  declarations: [IontestPage]
})
export class IontestPageModule {}
