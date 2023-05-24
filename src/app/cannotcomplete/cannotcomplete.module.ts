import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CannotcompletePageRoutingModule } from './cannotcomplete-routing.module';

import { CannotcompletePage } from './cannotcomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CannotcompletePageRoutingModule
  ],
  declarations: [CannotcompletePage]
})
export class CannotcompletePageModule {}
