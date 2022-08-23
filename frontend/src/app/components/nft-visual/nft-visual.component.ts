import {Component, Input, OnInit} from '@angular/core';
import {NftDetails} from "../../shared/interfaces/web3.interfaces";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-nft-visual',
  templateUrl: './nft-visual.component.html',
  styleUrls: ['./nft-visual.component.scss'],
})
export class NftVisualComponent implements OnInit {
  @Input() nftDetails: NftDetails;

  @Input() imgUrl: string;
  imgStyle;
  imgContainerStyle;


  constructor(private uiService: UiService) {
  }

  ngOnInit() {
    console.log(this.nftDetails);
    this.uiService.getCardWidthObservable().subscribe(
      (width) => {
        const ratio = this.uiService.getImageRatio(width, false);
        const nftImgDimensions = this.uiService.getImageDimensions(width, ratio);
        console.log(nftImgDimensions);
        this.imgStyle = {
          'width.px': nftImgDimensions.w * 0.6
        };
        this.imgContainerStyle = {
          'height.px': nftImgDimensions.h * 1.5
        };
      }
    );
  }

}
