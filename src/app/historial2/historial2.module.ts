import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Historial2PageRoutingModule } from './historial2-routing.module';

import { Historial2Page } from './historial2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Historial2PageRoutingModule
  ],
  declarations: [Historial2Page]
})
export class Historial2PageModule {}
