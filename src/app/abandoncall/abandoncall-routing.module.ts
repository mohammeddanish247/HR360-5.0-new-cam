import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbandoncallPage } from './abandoncall.page';

const routes: Routes = [
  {
    path: '',
    component: AbandoncallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbandoncallPageRoutingModule {}
