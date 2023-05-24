import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IontestPage } from './iontest.page';

const routes: Routes = [
  {
    path: '',
    component: IontestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IontestPageRoutingModule {}
