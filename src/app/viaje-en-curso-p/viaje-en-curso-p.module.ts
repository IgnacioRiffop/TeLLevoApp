import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeEnCursoPPageRoutingModule } from './viaje-en-curso-p-routing.module';

import { ViajeEnCursoPPage } from './viaje-en-curso-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeEnCursoPPageRoutingModule
  ],
  declarations: [ViajeEnCursoPPage]
})
export class ViajeEnCursoPPageModule {}
