import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html'
})
export class AddProductFormComponent {
  form: FormGroup;
  categories: string[] = []

  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) {
    this.form = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    });
    this.loadCategories();
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    if (this.form.valid) {
      this.activeModal.close(this.form.value);
    } else {
      console.log('form is not valid')
    }
  }

  loadCategories() {
    this.apiService.fetchAllCategories().pipe(
      tap(categories => {
        this.categories = categories;
      })
    ).subscribe();
  }
}
