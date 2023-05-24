import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewappliancePage } from './newappliance.page';

const routes: Routes = [
  {
    path: '',
    component: NewappliancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewappliancePageRoutingModule {}
