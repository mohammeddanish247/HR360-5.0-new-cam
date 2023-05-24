import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CannotcompletePage } from './cannotcomplete.page';

const routes: Routes = [
  {
    path: '',
    component: CannotcompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CannotcompletePageRoutingModule {}
