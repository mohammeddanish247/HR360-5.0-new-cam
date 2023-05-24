import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecertificatePage } from './createcertificate.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecertificatePageRoutingModule {}
