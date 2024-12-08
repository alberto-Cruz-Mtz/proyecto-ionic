import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperationsService} from "../service/operations.service";
import {IProduct, URL_API_PRODUCT} from "../service/product-type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  message = '';
  isOpen = false;
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private service: OperationsService,private route: ActivatedRoute) {
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
    this.route.queryParams.subscribe(params => {
      this.productForm.patchValue({
        code: params['code'] || '',
        description: params['description'] || '',
        type: params['type'] || '',
        costo:  params['purchasePrice'] || 0,
        venta: params['salesprice'] || 0,
        mayoreo: params['mayoreo'] || 0,
        category: params['category'] || '',
        existencia: params['quantity'] || 0,
      })
    });
  }

  ngOnInit() {
  }

  updateProduct(product: IProduct) {
    this.service.useBodyFetch(`${URL_API_PRODUCT}/${product.code}`, product, 'PUT')
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
      this.updateProduct({
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
}
