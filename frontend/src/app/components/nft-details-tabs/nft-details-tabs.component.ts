import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nft-details-tabs',
  templateUrl: './nft-details-tabs.component.html',
  styleUrls: ['./nft-details-tabs.component.scss'],
})
export class NftDetailsTabsComponent implements OnInit {
  @Input() nftOfferHistory;

  constructor() {
  }

  ngOnInit() {
  }

}
