import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialGananciaPageRoutingModule } from './historial-ganancia-routing.module';

import { HistorialGananciaPage } from './historial-ganancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialGananciaPageRoutingModule
  ],
  declarations: [HistorialGananciaPage]
})
export class HistorialGananciaPageModule {}
