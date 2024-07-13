import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { ProductListService } from '../../services/product-list.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  standalone: true,
  imports: [ ReactiveFormsModule ]
})
export class CategorySelectComponent implements OnInit {
  form: FormGroup;
  categories: string[] = [];

  constructor(private apiService: ApiService, private productListService: ProductListService) {
    this.form = new FormGroup({
      category: new FormControl('all')
    })
  }

  ngOnInit(): void {
    this.loadCategories();
    this.form.get('category')?.valueChanges.subscribe(cat => {
      this.onInputChange(cat);
    })
  }

  loadCategories() {
    this.apiService.fetchAllCategories().pipe(
      tap(categories => {
        this.categories = categories;
      })
    ).subscribe();
  }

  onInputChange(cat: string) {
    this.productListService.setCategory(cat);
  }
}
