import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarViajePageRoutingModule } from './seleccionar-viaje-routing.module';

import { SeleccionarViajePage } from './seleccionar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarViajePageRoutingModule
  ],
  declarations: [SeleccionarViajePage]
})
export class SeleccionarViajePageModule {}
