import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestBindPage } from './test-bind.page';

const routes: Routes = [
  {
    path: '',
    component: TestBindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestBindPageRoutingModule {}
