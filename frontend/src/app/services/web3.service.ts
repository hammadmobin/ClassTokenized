import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import * as  randomWords from 'random-words';
import {NftDetails} from "../shared/interfaces/web3.interfaces";


const maxSample = 10;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  sampleNfts: NftDetails[] = [];


  constructor() {
    const url = '/assets/img/samples/sample_';
    let count = 1;
    let collectionCount = 12;
    for (count; count <= maxSample;) {
      const uuid = count + 1;
      const finalImgUrl = `${url}${uuid}.jpg`;
      this.sampleNfts.push(
        {
          title: randomWords({exactly: 4, join: ' '}),
          url: `/art/${count - 1}`,
          ethPrice: ((Math.floor(Math.random() * 10) + 0.05)).toString(),
          usdPrice: '',
          faves: (Math.floor(Math.random() * 100)),
          isCurrentFav: true,
          imgUrl: finalImgUrl,
          ownerImg: '/assets/img/black-gold.jpg'
        }
      );
      count++;
    }
  }

  fetchSampleNfts(): Observable<NftDetails[]> {
    return of(this.sampleNfts);
  }

  fetchSampleNftDetails(id: number): Observable<NftDetails> {
    return of(this.sampleNfts[id]);
  }
}
