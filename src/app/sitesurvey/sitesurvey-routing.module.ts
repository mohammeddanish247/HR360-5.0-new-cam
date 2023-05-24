import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitesurveyPage } from './sitesurvey.page';

const routes: Routes = [
  {
    path: '',
    component: SitesurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesurveyPageRoutingModule {}
