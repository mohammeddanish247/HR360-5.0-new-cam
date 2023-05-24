import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuerychkPageRoutingModule } from './querychk-routing.module';

import { QuerychkPage } from './querychk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuerychkPageRoutingModule
  ],
  declarations: [QuerychkPage]
})
export class QuerychkPageModule {}
