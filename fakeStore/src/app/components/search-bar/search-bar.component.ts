import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  standalone: true,
  imports: [ ReactiveFormsModule ]
})
export class SearchBarComponent implements OnInit {
  form: FormGroup;

  constructor(private productListService: ProductListService) {
    this.form = new FormGroup({
      title: new FormControl('')
    })
  }

  ngOnInit() {
    this.form.get('title')?.valueChanges.subscribe(value => {
      this.onInputChange(value);
    })
  }

  onInputChange(value: string) {
    this.productListService.filterProducts(value);
  }
}
