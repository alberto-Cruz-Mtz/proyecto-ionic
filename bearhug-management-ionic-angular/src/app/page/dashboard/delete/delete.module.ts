import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePageRoutingModule } from './delete-routing.module';

import { DeletePage } from './delete.page';
import {AuthPageModule} from "../../auth/auth.module";
import {AddPageModule} from "../add/add.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePageRoutingModule,
    ReactiveFormsModule,
    AuthPageModule,
    AddPageModule
  ],
  declarations: [DeletePage]
})
export class DeletePageModule {}
