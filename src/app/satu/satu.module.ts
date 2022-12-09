import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SatuPageRoutingModule } from './satu-routing.module';

import { SatuPage } from './satu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SatuPageRoutingModule
  ],
  declarations: [SatuPage]
})
export class SatuPageModule {}
