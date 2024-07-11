import { Component, Input } from '@angular/core';

import { Product } from '../../../types/product';

@Component({
  selector: 'tr[app-shop-list-row]',
  templateUrl: './shop-list-row.component.html',
  styleUrl: './shop-list-row.component.scss'
})
export class ShopListRowComponent {
  @Input() product?: Product;
}
