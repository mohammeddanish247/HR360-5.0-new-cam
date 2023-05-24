import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitesurveypicsPage } from './sitesurveypics.page';

const routes: Routes = [
  {
    path: '',
    component: SitesurveypicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesurveypicsPageRoutingModule {}
