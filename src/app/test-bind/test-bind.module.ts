import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestBindPageRoutingModule } from './test-bind-routing.module';

import { TestBindPage } from './test-bind.page';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestBindPageRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
      ],
  declarations: [TestBindPage]
})
export class TestBindPageModule {}
