import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuenta2PageRoutingModule } from './cuenta2-routing.module';

import { Cuenta2Page } from './cuenta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuenta2PageRoutingModule
  ],
  declarations: [Cuenta2Page]
})
export class Cuenta2PageModule {}
