import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperationsService} from "../service/operations.service";
import {URL_API_PRODUCT} from "../service/product-type";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  deleteForm: FormGroup;
  message = '';
  isOpen = false;

  constructor(private fb: FormBuilder, private service: OperationsService) {
    this.deleteForm = this.fb.group({
      code: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  deleteProduct(code: string) {
    this.service.useFetchData(`${URL_API_PRODUCT}/${code}`, 'DELETE')
      .then(res => {
        this.message = res.message;
        this.isOpen = true;
      })
      .catch(err => console.log(err));
  }

  handleSubmit() {
    if (this.deleteForm.valid) {
      const code = this.deleteForm.controls['code'].value;
      this.deleteProduct(code);
    }
  }
}
