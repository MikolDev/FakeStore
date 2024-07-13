import { AddProductFormComponent } from '../../../modals/add-product-form/add-product-form.component';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Product } from '../../../types/product';
import { ProductListService } from '../../../services/product-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent {
  products$: Observable<Product[]>;

  constructor(private productListService: ProductListService, private modalService: NgbModal) {
    this.products$ = this.productListService.getProducts();
  }

  addProduct() {
    const modalRef = this.modalService.open(AddProductFormComponent);
    modalRef.result.then((product) => {
      if (product) {
        this.productListService.addProduct(product);
      }
    });
  }
}
