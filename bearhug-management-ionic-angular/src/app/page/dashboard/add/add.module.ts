import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';
import {AuthPageModule} from "../../auth/auth.module";
import {ModalComponent} from "../component/modal/modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule,
    AuthPageModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent
  ],
  declarations: [AddPage, ModalComponent]
})
export class AddPageModule {}
