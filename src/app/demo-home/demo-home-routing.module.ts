import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoHomePage } from './demo-home.page';

const routes: Routes = [
  {
    path: '',
    component: DemoHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoHomePageRoutingModule {}
