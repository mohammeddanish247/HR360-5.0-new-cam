import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineersignaturePage } from './engineersignature.page';

const routes: Routes = [
  {
    path: '',
    component: EngineersignaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineersignaturePageRoutingModule {}
