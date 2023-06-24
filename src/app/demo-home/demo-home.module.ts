import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoHomePageRoutingModule } from './demo-home-routing.module';

import { DemoHomePage } from './demo-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoHomePageRoutingModule
  ],
  declarations: [DemoHomePage]
})
export class DemoHomePageModule {}
