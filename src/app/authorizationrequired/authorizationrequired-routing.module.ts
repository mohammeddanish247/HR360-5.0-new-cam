import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationrequiredPage } from './authorizationrequired.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationrequiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationrequiredPageRoutingModule {}
