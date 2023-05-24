import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteServicePage } from './complete-service.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteServicePageRoutingModule {}
