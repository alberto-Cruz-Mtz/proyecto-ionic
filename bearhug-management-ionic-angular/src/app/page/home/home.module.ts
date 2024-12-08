import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {LogoComponent} from "../../core/component/logo/logo.component";
import {ProfileCardComponent} from "./component/profile-card/profile-card.component";
import {FooterComponent} from "../../core/component/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
    exports: [
        LogoComponent,
        FooterComponent
    ],
  declarations: [HomePage, LogoComponent, ProfileCardComponent, FooterComponent]
})
export class HomePageModule {}
