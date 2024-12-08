import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {CardPricingComponent} from "./component/card-pricing/card-pricing.component";
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule, CardPricingComponent,],
  declarations: [
    CardPricingComponent,
  ]
})
export class HomePageRoutingModule {}
