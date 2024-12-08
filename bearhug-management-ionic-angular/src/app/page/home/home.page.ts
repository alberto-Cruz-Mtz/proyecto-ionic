import { Component, OnInit } from '@angular/core';
import {FEATURES} from "./constant/features";
import {plans} from "./constant/pricing";
import {profiles} from "./constant/profiles";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imageUrl = './assets/images/hero-image.jpg';
  features = FEATURES;
  plans = plans;
  profiles = profiles;

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly crypto = crypto;
}
