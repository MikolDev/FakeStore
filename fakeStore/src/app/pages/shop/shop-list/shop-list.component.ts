import { AddProductFormComponent } from '../../../modals/add-product-form/add-product-form.component';
import { ApiService } from '../../../services/api.service';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent {
  products: Product[] = [];

  constructor(private apiService: ApiService, private modalService: NgbModal) {}

  ngOnInit() {
    this.products = this.apiService.getProducts();
  }

  addProduct() {
    const modalRef = this.modalService.open(AddProductFormComponent);
    modalRef.result.then((product) => {
      if (product) {
        this.apiService.addProduct(product);
      }
    });
  }
}
