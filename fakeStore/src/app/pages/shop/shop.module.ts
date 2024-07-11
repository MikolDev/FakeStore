import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports: [
    ShopListComponent
  ]
})
export class ShopModule { }
