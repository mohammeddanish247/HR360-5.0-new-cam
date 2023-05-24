import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';
import {  ReactiveFormsModule} from '@angular/forms';
import { TestPage } from './test.page';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyIonicModule} from '@ngx-formly/ionic';
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DynamicFormsIonicUIModule } from '@ng-dynamic-forms/ui-ionic';
//import { myCustomValidator } from './model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule,
    ReactiveFormsModule, FormlyModule.forRoot(),
    FormlyIonicModule ,
    DynamicFormsMaterialUIModule,
    DynamicFormsIonicUIModule
  ],
  declarations: [TestPage],
  
})
export class TestPageModule {}
