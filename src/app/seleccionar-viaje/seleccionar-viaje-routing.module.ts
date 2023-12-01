import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarViajePage } from './seleccionar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarViajePageRoutingModule {}
