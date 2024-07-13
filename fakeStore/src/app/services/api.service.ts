import { Observable, catchError, of, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private allProductsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  fetchAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.allProductsUrl)
      .pipe(
        tap((products) => { return products }),
        catchError(this.handleError<Product[]>('getAllProducts', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      return of(result as T);
    };
  }
}
