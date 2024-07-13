import { BehaviorSubject, tap } from 'rxjs';

import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private products: Product[] = [];
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.products);
  private isCategorySet: boolean = false;
  private currentCategory: string = '';

  constructor(private apiService: ApiService) {
    this.loadProducts();
  }

  private loadProducts() {
    this.apiService.fetchAllProducts().pipe(
      tap(products => {
        this.products = products;
        this.productsSubject.next(this.products);
      })
    ).subscribe();
  }

  getProducts() {
   return this.productsSubject.asObservable();
  }

  addProduct(product: Product) {
    // here you could call a method from api service to send a product to database and add a product to array depending on response from api
    this.products.unshift(product);
    this.productsSubject.next(this.products);
  }


  filterProducts(substring: string) {
    const filteredProducts =  this.products.filter(product => 
      this.isCategorySet ?
      product.title.toLowerCase().includes(substring.toLowerCase()) && product.category == this.currentCategory
      : product.title.toLowerCase().includes(substring.toLowerCase())
    );
    this.productsSubject.next(filteredProducts);
  }

  setCategory(cat: string) {
    if (cat !== 'all') {
      this.isCategorySet = true;
      this.currentCategory = cat;
      const categorizedProducts =  this.products.filter(product => product.category == cat);
      this.productsSubject.next(categorizedProducts);
    } else {
      this.isCategorySet = false;
      this.productsSubject.next(this.products)
    }
  }
}
