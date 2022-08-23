import {Component, Input, OnInit} from '@angular/core';
import {NftDetails} from "../../shared/interfaces/web3.interfaces";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss'],
})
export class NftCardComponent implements OnInit {
  @Input() cardDetails: NftDetails;
  imgCardSize;
  cardStyle;
  imgStyle;
  imgContainerStyle;

  constructor(private uiService: UiService) {
  }

  ngOnInit() {
    this.uiService.getWidthObservable().subscribe((width) => {
    });
    this.uiService.getCardWidthObservable().subscribe(
      (width) => {
        this.imgCardSize = width;
        const ratio = this.uiService.getImageRatio(width);
        const nftCardDimensions = this.uiService.getImageDimensions(width, ratio);
        this.cardStyle = {
          'width.px': nftCardDimensions.w,
          'height.px': nftCardDimensions.h
        };
        this.imgStyle = {
          'width.px': nftCardDimensions.w
        };
        this.imgContainerStyle = {
          'height.px': nftCardDimensions.h * 0.75
        };
      }
    );
  }

}
