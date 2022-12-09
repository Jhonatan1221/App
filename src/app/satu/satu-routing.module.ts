import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SatuPage } from './satu.page';

const routes: Routes = [
  {
    path: '',
    component: SatuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatuPageRoutingModule {}
