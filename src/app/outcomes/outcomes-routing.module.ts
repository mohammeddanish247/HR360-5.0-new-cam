import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutcomesPage } from './outcomes.page';

const routes: Routes = [
  {
    path: '',
    component: OutcomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutcomesPageRoutingModule {}
