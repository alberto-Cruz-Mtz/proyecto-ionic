import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePageRoutingModule } from './update-routing.module';

import { UpdatePage } from './update.page';
import {AddPageModule} from "../add/add.module";
import {AuthPageModule} from "../../auth/auth.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdatePageRoutingModule,
        AddPageModule,
        AuthPageModule,
        ReactiveFormsModule
    ],
  declarations: [UpdatePage]
})
export class UpdatePageModule {}
