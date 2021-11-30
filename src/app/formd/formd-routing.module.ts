import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormdPage } from './formd.page';

const routes: Routes = [
  {
    path: '',
    component: FormdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormdPageRoutingModule {}
