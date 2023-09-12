import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeEnCursoPPage } from './viaje-en-curso-p.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeEnCursoPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeEnCursoPPageRoutingModule {}
