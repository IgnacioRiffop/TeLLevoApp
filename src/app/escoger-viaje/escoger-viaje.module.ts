import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscogerViajePageRoutingModule } from './escoger-viaje-routing.module';

import { EscogerViajePage } from './escoger-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscogerViajePageRoutingModule
  ],
  declarations: [EscogerViajePage]
})
export class EscogerViajePageModule {}
