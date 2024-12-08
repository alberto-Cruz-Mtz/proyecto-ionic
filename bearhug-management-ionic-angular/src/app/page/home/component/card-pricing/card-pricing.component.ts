import {Component, Input, input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss'],
})
export class CardPricingComponent  implements OnInit {
  @Input() isPopular: boolean = false;
  @Input() title = '';
  @Input() features: string[] = [];
  @Input() price = 0;

  constructor() { }

  ngOnInit() {}

  protected readonly Math = Math;
}
