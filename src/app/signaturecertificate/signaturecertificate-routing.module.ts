import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignaturecertificatePage } from './signaturecertificate.page';

const routes: Routes = [
  {
    path: '',
    component: SignaturecertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignaturecertificatePageRoutingModule {}
