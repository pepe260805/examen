import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelPlacementPage } from './label-placement.page';

const routes: Routes = [
  {
    path: '',
    component: LabelPlacementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelPlacementPageRoutingModule {}
