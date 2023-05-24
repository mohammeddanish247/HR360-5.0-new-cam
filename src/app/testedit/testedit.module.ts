import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { TesteditPageRoutingModule } from './testedit-routing.module';
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DynamicFormsIonicUIModule } from '@ng-dynamic-forms/ui-ionic';
import { TesteditPage } from './testedit.page';
import {  ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteditPageRoutingModule,
    DynamicFormsMaterialUIModule,
    DynamicFormsIonicUIModule,
    ReactiveFormsModule
  ],
  declarations: [TesteditPage]
})
export class TesteditPageModule {}
