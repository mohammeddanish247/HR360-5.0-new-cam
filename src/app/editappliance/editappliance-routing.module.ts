import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditappliancePage } from './editappliance.page';

const routes: Routes = [
  {
    path: '',
    component: EditappliancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditappliancePageRoutingModule {}
