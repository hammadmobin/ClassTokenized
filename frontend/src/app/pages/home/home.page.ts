import {Component, OnInit} from '@angular/core';
import {Btn_Styles} from "../../shared/interfaces/buttons";
import {Subject} from "rxjs";
import * as  randomWords from 'random-words';
import {Web3Service} from "../../services/web3.service";
import {NftDetails} from "../../shared/interfaces/web3.interfaces";


const maxSample = 10;
const maxCollectionSample = 16;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profileInfo;
  isLoading = true;
  loadNFTsBtnOptions = {
    label: 'Load More',
    btnStyleType: Btn_Styles.secondary,
    url: '/'
  }
  topCollections: {
    title: string;
    url?: string;
    ethFloorPrice?: string;
    usdFloorPrice?: string;
    rank?: number;
    isVerified?: boolean;
    imgUrl?: string;
    owner?: string;
    ownerUrl?: string;
    [key: string]: any;
  }[] = [];
  cards: NftDetails[];
  private $destroy = new Subject<void>();

  constructor(private rosaWeb3: Web3Service) {
  }

  ngOnInit() {
    this.cards = [...this.rosaWeb3.sampleNfts];
    const url = '/assets/img/samples/sample_';
    let collectionCount = 12;
    let counter = 1;

    console.log(this.cards);
    for (collectionCount; collectionCount <= maxCollectionSample;) {
      const uuid = collectionCount + 1;
      const finalImgUrl = `${url}${uuid}.jpg`;
      this.topCollections.push({
        title: randomWords({exactly: 2, join: ' '}),
        url: '/collections/nft_id_x',
        ethFloorPrice: ((Math.floor(Math.random() * 10) + 0.88).toString()),
        usdFloorPrice: '',
        rank: counter,
        isVerified: true,
        imgUrl: finalImgUrl
      });
      collectionCount++;
      counter++;
    }

    console.log(this.cards);
  }

}
