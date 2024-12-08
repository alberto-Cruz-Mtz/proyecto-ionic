import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() rol: string = '';
  @Input() photo: string = '';
  @Input() biography: string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
