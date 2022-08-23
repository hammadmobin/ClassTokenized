export interface NftDetails {
  title: string;
  url: string;
  ethPrice?: string;
  usdPrice?: string;
  faves?: number;
  isCurrentFav?: boolean;
  imgUrl?: string;
  ownerImg?: string;

  [key: string]: any;

}
