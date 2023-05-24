import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignaturecertificatePageRoutingModule } from './signaturecertificate-routing.module';
 

import { SignaturecertificatePage } from './signaturecertificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturecertificatePageRoutingModule,
     
  ],
  declarations: [SignaturecertificatePage]
})
export class SignaturecertificatePageModule {}
