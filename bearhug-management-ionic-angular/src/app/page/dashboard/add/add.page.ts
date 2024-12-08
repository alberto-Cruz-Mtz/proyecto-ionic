import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperationsService} from "../service/operations.service";
import {IProduct, URL_API_PRODUCT} from "../service/product-type";

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  message = '';
  isOpen = false;
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private service: OperationsService,) {
    this.productForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(0)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      type: ['', [Validators.required]],
      costo: ['', [Validators.required, Validators.min(0)]],
      venta: ['', [Validators.required, Validators.min(0)]],
      mayoreo: ['', [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required]],
      existencia: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
  }

  addProduct(product: IProduct) {
    this.service.useBodyFetch(URL_API_PRODUCT, product, 'POST')
      .then(result => {
        console.log(result);
        this.message = result.message;
        this.isOpen = true;
      })
      .catch(error => console.log(error));
  }

  handleSubmit(): void {
    if(this.productForm.valid) {
      const credentials = this.productForm.value;
      this.addProduct({
        code: credentials.code,
        description: credentials.description,
        sale: credentials.type,
        purchasePrice: credentials.costo,
        salesprice: credentials.venta,
        mayoreo: credentials.mayoreo,
        category: credentials.category,
        quantity: credentials.existencia,
      })
      this.productForm.reset();
    }
  }

  protected readonly open = open;
}
