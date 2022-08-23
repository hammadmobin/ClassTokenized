import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Btn_Styles} from "../../shared/interfaces/buttons";
import {NftDetails} from "../../shared/interfaces/web3.interfaces";

@Component({
  selector: 'app-nft-item-details',
  templateUrl: './nft-item-details.component.html',
  styleUrls: ['./nft-item-details.component.scss'],
})
export class NftItemDetailsComponent implements OnInit, OnDestroy {
  @Input() nftDetails: NftDetails;
  buyBtnOptions = {
    label: 'Buy for 4.5 ETH',
    btnStyleType: Btn_Styles.primary
  };
  offerBtnOptions = {
    label: 'Make offer',
    btnStyleType: Btn_Styles.secondary
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('destroying details component with tabs');
  }

}
