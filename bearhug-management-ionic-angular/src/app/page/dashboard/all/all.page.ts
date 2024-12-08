import { Component, OnInit } from '@angular/core';
import {IProduct, URL_API_PRODUCT} from "../service/product-type";
import {OperationsService} from "../service/operations.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  dataProduct: IProduct[] = [];

  constructor(private router: Router, private service: OperationsService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadData();
  }

  enviarObjeto(data: IProduct) {
    this.router.navigate(['/dashboard/update'],
      {queryParams: data});
  }

  loadData(){
    this.service.useFetchData(URL_API_PRODUCT, 'GET')
      .then(response => {
        if(response.status){
          this.dataProduct = response.data;
        }
      })
      .catch(error => console.log(error));
  }
  trackByFn(index: number, item: IProduct) {
    return item.id;
  }
}
