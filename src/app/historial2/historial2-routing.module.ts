import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Historial2Page } from './historial2.page';

const routes: Routes = [
  {
    path: '',
    component: Historial2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Historial2PageRoutingModule {}
