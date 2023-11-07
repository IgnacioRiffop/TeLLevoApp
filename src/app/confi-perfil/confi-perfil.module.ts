import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiPerfilPageRoutingModule } from './confi-perfil-routing.module';

import { ConfiPerfilPage } from './confi-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiPerfilPageRoutingModule
  ],
  declarations: [ConfiPerfilPage]
})
export class ConfiPerfilPageModule {}
