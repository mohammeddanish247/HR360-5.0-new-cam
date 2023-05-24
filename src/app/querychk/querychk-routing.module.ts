import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuerychkPage } from './querychk.page';

const routes: Routes = [
  {
    path: '',
    component: QuerychkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuerychkPageRoutingModule {}
