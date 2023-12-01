import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeSeleccionadoPPage } from './viaje-seleccionado-p.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeSeleccionadoPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeSeleccionadoPPageRoutingModule {}
