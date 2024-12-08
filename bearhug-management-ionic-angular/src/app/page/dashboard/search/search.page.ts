import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperationsService} from "../service/operations.service";
import {IProduct, URL_API_PRODUCT} from "../service/product-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchForm: FormGroup;
  error = false;
  message = ''
  data: IProduct;
  showData = false;

  constructor(private router: Router, private fb: FormBuilder, private service: OperationsService) {
    this.searchForm = this.fb.group({
      code: ['', Validators.required],
    })
    this.data = {
      code: '',
      description: '',
      sale: '',
      purchasePrice: 0,
      salesprice: 0,
      mayoreo: 0,
      category: '',
      quantity: '',
    }
  }

  ngOnInit() {
  }

  enviarObjeto() {
    this.router.navigate(['/dashboard/update'],
      {queryParams: this.data});
  }

  searchProduct(code: string) {
    this.service.useFetchData(`${URL_API_PRODUCT}/${code}`, 'GET')
      .then((response) => {
        if (response.status) {
          this.data = response.data;
          this.error = false;
          this.showData = true;
        } else {
          this.showData = false;
          this.error = true;
          this.message = response.message;
        }
      })
      .catch((error) => console.log(error));
  }

  handleSubmit() {
    if (this.searchForm.valid) {
      const code = this.searchForm.controls['code'].value;
      console.log(code);
      this.searchProduct(code)
    }
  }
}
