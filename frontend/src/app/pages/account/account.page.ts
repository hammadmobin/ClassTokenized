import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  products: any = [
    { "name": "Air Pro", "image": "/assets/img/air.png", "price": "134" },
    { "name": "Fuel Fusion", "image": "/assets/img/air3.png", "price": "89" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
