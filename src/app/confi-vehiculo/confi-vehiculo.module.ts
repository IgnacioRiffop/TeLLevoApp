import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiVehiculoPageRoutingModule } from './confi-vehiculo-routing.module';

import { ConfiVehiculoPage } from './confi-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiVehiculoPageRoutingModule
  ],
  declarations: [ConfiVehiculoPage]
})
export class ConfiVehiculoPageModule {}
