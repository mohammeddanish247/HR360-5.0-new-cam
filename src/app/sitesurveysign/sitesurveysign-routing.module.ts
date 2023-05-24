import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitesurveysignPage } from './sitesurveysign.page';

const routes: Routes = [
  {
    path: '',
    component: SitesurveysignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesurveysignPageRoutingModule {}
