import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizationrequiredPageRoutingModule } from './authorizationrequired-routing.module';

import { AuthorizationrequiredPage } from './authorizationrequired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorizationrequiredPageRoutingModule
  ],
  declarations: [AuthorizationrequiredPage]
})
export class AuthorizationrequiredPageModule {}
