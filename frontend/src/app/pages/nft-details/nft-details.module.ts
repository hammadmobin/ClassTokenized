import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NftDetailsPageRoutingModule} from './nft-details-routing.module';

import {NftDetailsPage} from './nft-details.page';
import {NftVisualComponent} from "../../components/nft-visual/nft-visual.component";
import {NftItemDetailsComponent} from "../../components/nft-item-details/nft-item-details.component";
import {ProfilePageModule} from "../profile/profile.module";
import {NftDetailsTabsComponent} from "../../components/nft-details-tabs/nft-details-tabs.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NftDetailsPageRoutingModule,
    ProfilePageModule
  ],
  declarations: [NftDetailsPage, NftVisualComponent, NftItemDetailsComponent, NftDetailsTabsComponent]
})
export class NftDetailsPageModule {
}
