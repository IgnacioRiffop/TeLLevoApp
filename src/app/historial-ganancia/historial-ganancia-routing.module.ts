import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialGananciaPage } from './historial-ganancia.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialGananciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialGananciaPageRoutingModule {}
