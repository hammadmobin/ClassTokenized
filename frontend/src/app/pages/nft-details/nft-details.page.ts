import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UtilService} from "../../services/util.service";
import {Subject, throwError} from "rxjs";
import {switchMap, takeUntil, tap} from "rxjs/operators";
import {Web3Service} from "../../services/web3.service";
import {NftDetails} from "../../shared/interfaces/web3.interfaces";

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.page.html',
  styleUrls: ['./nft-details.page.scss'],
})
export class NftDetailsPage implements OnInit, OnDestroy {
  isLoading = true;
  destroy$ = new Subject<void>();
  nftDetails: NftDetails;

  constructor(private route: ActivatedRoute, private util: UtilService, private rosaWeb3: Web3Service) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$),
      tap((paramMap) => {
        if (!paramMap.has('id')) {
          this.util.goToNew('/home');
          return throwError('No valid nft provided');
        }
      }),
      switchMap((paramMap) => {
        const subId = paramMap.get('id');
        console.log(subId);
        return this.rosaWeb3.fetchSampleNftDetails(parseInt(subId, 10));
      })
    ).subscribe((nftDetails) => {
      console.log(nftDetails);
      this.nftDetails = nftDetails;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  handleCardClick($event) {
    this.util.goToNew('');
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
