import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { RatingBarComponent } from '../../components/rating-bar/rating-bar.component';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopListRowComponent } from './shop-list-row/shop-list-row.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopListComponent,
    ShopListRowComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatTableModule,
    RatingBarComponent,
    SearchBarComponent
],
  exports: [
    ShopListComponent
  ]
})
export class ShopModule { }
