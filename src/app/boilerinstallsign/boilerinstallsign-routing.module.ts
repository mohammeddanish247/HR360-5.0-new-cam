import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerinstallsignPage } from './boilerinstallsign.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerinstallsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerinstallsignPageRoutingModule {}
