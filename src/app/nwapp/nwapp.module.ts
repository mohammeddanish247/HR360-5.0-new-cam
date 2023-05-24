import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NwappPageRoutingModule } from './nwapp-routing.module';
import { NwappPage } from './nwapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NwappPageRoutingModule
  ],
  declarations: [NwappPage]
})
export class NwappPageModule {}
