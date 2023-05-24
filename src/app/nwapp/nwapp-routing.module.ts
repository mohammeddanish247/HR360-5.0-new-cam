import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NwappPage } from './nwapp.page';

const routes: Routes = [
  {
    path: '',
    component: NwappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NwappPageRoutingModule {}
