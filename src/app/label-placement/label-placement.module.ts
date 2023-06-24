import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelPlacementPageRoutingModule } from './label-placement-routing.module';

import { LabelPlacementPage } from './label-placement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelPlacementPageRoutingModule
  ],
  declarations: [LabelPlacementPage]
})
export class LabelPlacementPageModule {}
