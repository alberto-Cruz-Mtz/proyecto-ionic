import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AuthPageRoutingModule} from './auth-routing.module';

import {AuthPage} from './auth.page';
import {HomePageModule} from "../home/home.module";
import {HomePageRoutingModule} from "../home/home-routing.module";
import {HeaderComponent} from "../../core/component/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AuthPageRoutingModule,
    HomePageModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ],
    exports: [
        HeaderComponent
    ],
  declarations: [AuthPage, HeaderComponent,]
})
export class AuthPageModule {
}
