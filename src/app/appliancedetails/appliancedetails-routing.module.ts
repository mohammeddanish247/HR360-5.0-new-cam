import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliancedetailsPage } from './appliancedetails.page';

const routes: Routes = [
  {
    path: '',
    component: AppliancedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliancedetailsPageRoutingModule {}
