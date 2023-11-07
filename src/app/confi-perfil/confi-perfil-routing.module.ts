import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiPerfilPage } from './confi-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiPerfilPageRoutingModule {}
