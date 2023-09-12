import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuenta2Page } from './cuenta2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuenta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuenta2PageRoutingModule {}
