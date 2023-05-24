import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatecertificatePageRoutingModule } from './createcertificate-routing.module';

import { CreatecertificatePage } from './createcertificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatecertificatePageRoutingModule
  ],
  declarations: [CreatecertificatePage]
})
export class CreatecertificatePageModule {}
