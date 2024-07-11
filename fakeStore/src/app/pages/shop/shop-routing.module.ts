import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ShopListComponent } from './shop-list/shop-list.component';

const routes: Routes = [
  { path: '', component: ShopListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
