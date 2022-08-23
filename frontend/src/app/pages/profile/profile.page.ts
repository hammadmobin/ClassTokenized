import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap, takeUntil, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";
import {Btn_Styles, BtnOptions} from "../../shared/interfaces/buttons";
import {NftDetails} from "../../shared/interfaces/web3.interfaces";
import {Web3Service} from "../../services/web3.service";

const maxSample = 10;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileInfo;
  isLoading = true;
  loadNFTsBtnOptions: BtnOptions = {
    label: 'Load More',
    btnStyleType: Btn_Styles.secondary,
    url: '/'
  }
  private $destroy = new Subject<void>();
  cards: NftDetails[];

  /* TODO
  *   1. Infinite scroll
  *   2. View single NFT card
  *   3. Components - card, buttons, newsletter , inputs etc.
  *   4. Search functionality
  *   5. Color scheme
  *
  * */
  constructor(private auth: AuthService, private route: ActivatedRoute, private rosaWeb3: Web3Service) {
  }

  ngOnInit() {
    this.cards = this.rosaWeb3.sampleNfts;
    console.log(this.cards);
    this.route.paramMap.pipe(
      takeUntil(this.$destroy),
      tap((paramMap) => {
        if (!paramMap.has('id')) {
          return this.auth.myProfile();
          return throwError('No valid profile identifier');
        }
      }),
      switchMap((paramMap) => {
        const profileId = paramMap.get('id');
          return this.auth.myProfile();
        })
    ).subscribe((profileDetails) => {
      this.profileInfo = profileDetails.data;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

}
