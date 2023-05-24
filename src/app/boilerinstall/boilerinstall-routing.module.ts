import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerinstallPage } from './boilerinstall.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerinstallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerinstallPageRoutingModule {}
