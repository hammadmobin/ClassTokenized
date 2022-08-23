import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CARD_IMG_WIDTH, UI_SCREEN_SIZES, UI_SCREENS} from '../shared/constants/ui.constants';
import {Dimensions} from "../shared/interfaces/nft.interfaces";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  screenType: BehaviorSubject<number> = new BehaviorSubject<number>(UI_SCREENS.large);
  private resized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private width: BehaviorSubject<number> = new BehaviorSubject<any>(320);
  private height: BehaviorSubject<number> = new BehaviorSubject<any>(450);
  screenResizeSubscriber = {
    next: (dimensions: { width: number; height: number; }) => {
      console.log(dimensions);
      this.height.next(dimensions.height);
      this.width.next(dimensions.width);
      this.setCardSize(dimensions.width);
      this.setScreenType(dimensions.width);
      this.resized.next(true);
    },
    error: (err) => console.table(err),
  };
  private cardWidth: BehaviorSubject<number> = new BehaviorSubject<any>(CARD_IMG_WIDTH.large);

  constructor() {
  }

  setWidth(width: number) {

    this.setCardSize(width);
    this.width.next(width);

  }

  setHeight(height: number) {
    this.height.next(height);
  }

  setScreenType(width: number) {
    if (width <= UI_SCREEN_SIZES.phone) {
      this.screenType.next(UI_SCREENS.phone);
    } else if (width <= UI_SCREEN_SIZES.tablet) {
      this.screenType.next(UI_SCREENS.tablet);
    } else {
      this.screenType.next(UI_SCREENS.large);
    }
  }

  getWidth() {
    return this.width.getValue();
  }

  getHeight() {
    return this.height.getValue();
  }

  getHeightObservable(): Observable<number> {
    return this.height.asObservable();
  }

  getWidthObservable(): Observable<number> {
    return this.width.asObservable();
  }

  getResizedObservable(): Observable<boolean> {
    return this.resized.asObservable();
  }

  getScreenTypeObservable(): Observable<number> {
    return this.screenType.asObservable();
  }

  getCardWidthObservable(): Observable<number> {
    return this.cardWidth.asObservable();
  }

  // Set the card width for nft-card component
  setCardSize(currentWidth) {
    return this.cardWidth.next(currentWidth);
  }

// Ratios set through manual responsive testing
//  This is the ratio used to showcase the  nft images while maintaining quality on different device sizes
  getImageRatio(currentWidth, nftCard = true): Dimensions {
    if (!nftCard) {
      if (currentWidth <= UI_SCREEN_SIZES.phone) {
        return {w: 0.85, h: 0.85};
      }
      if (currentWidth <= UI_SCREEN_SIZES.tablet) {
        return {w: 0.55, h: 0.8};
      }
      if (currentWidth <= UI_SCREEN_SIZES.large) {
        return {w: 0.42, h: 0.57};
      }
      if (currentWidth <= UI_SCREEN_SIZES.xlarge) {
        return {w: 0.45, h: 0.55};
      }
      if (currentWidth >= UI_SCREEN_SIZES.xlarge) {
        return {w: 0.41, h: 0.59};
      }
    } else {
      if (currentWidth <= UI_SCREEN_SIZES.phone) {
        return {w: 0.85, h: 1.8};
      }
      if (currentWidth <= UI_SCREEN_SIZES.tablet) {
        return {w: 0.3, h: 2.1};
      }
      if (currentWidth <= UI_SCREEN_SIZES.large) {
        return {w: 0.18, h: 1.8};
      }
      if (currentWidth <= UI_SCREEN_SIZES.xlarge) {
        return {w: 0.22, h: 1.75};
      }
      if (currentWidth >= UI_SCREEN_SIZES.xlarge) {
        return {w: 0.18, h: 1.6};
      }
    }
  }

  getImageDimensions(deviceWidth: number, ratio: Dimensions): Dimensions {
    let newCardWidth = deviceWidth * ratio.w;
    let newCardHeight = newCardWidth * ratio.h;
    return {
      w: newCardWidth,
      h: newCardHeight
    }
  }

}
