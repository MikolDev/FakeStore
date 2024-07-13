import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html'
})
export class AddProductFormComponent {
  form: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.form = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    });
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
}
