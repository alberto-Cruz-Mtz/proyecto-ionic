import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import {AuthPageModule} from "../../auth/auth.module";
import {AddPageModule} from "../add/add.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    AuthPageModule,
    ReactiveFormsModule,
    AddPageModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
