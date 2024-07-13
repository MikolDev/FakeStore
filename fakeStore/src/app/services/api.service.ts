import { Observable, catchError, of, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private allProductsUrl = 'https://fakestoreapi.com/products';
  private allCategoriesUrl = 'https://fakestoreapi.com/products/categories';

  constructor(private http: HttpClient) { }

  fetchAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.allProductsUrl)
      .pipe(
        tap((products) => { return products }),
        catchError(this.handleError<Product[]>('getAllProducts', []))
      );
  }

  fetchAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.allCategoriesUrl)
      .pipe(
        tap((categories) => { return categories }),
        catchError(this.handleError<string[]>('getAllCategories', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      return of(result as T);
    };
  }
}
