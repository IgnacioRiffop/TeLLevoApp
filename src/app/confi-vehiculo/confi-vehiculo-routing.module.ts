import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiVehiculoPage } from './confi-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiVehiculoPageRoutingModule {}
