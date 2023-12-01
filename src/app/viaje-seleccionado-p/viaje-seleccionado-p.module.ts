import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeSeleccionadoPPageRoutingModule } from './viaje-seleccionado-p-routing.module';

import { ViajeSeleccionadoPPage } from './viaje-seleccionado-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeSeleccionadoPPageRoutingModule
  ],
  declarations: [ViajeSeleccionadoPPage]
})
export class ViajeSeleccionadoPPageModule {}
