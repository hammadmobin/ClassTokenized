import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProfilePageRoutingModule} from './profile-routing.module';

import {ProfilePage} from './profile.page';
import {ProfileHeroComponent} from "../../components/profile-hero/profile-hero.component";
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {DropdownInputComponent} from "../../components/dropdown-input/dropdown-input.component";
import {NftCardComponent} from "../../components/nft-card/nft-card.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {
  NewsletterSubscribeInputComponent
} from "../../components/newsletter-subscribe-input/newsletter-subscribe-input.component";
import {ButtonComponent} from "../../components/button/button.component";
import {MainNavComponent} from "../../components/main-nav/main-nav.component";
import {FeatureBannerComponent} from "../../components/feature-banner/feature-banner.component";
import {CustomResizeDirective} from "../../shared/directives/custom-resize/custom-resize.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
  ],
  exports: [
    MainNavComponent,
    FooterComponent,
    NftCardComponent,
    ButtonComponent,
    FeatureBannerComponent,
    CustomResizeDirective
  ],
  declarations: [ProfilePage, ProfileHeroComponent, SearchBarComponent, DropdownInputComponent, NftCardComponent, CustomResizeDirective, FooterComponent, NewsletterSubscribeInputComponent, ButtonComponent, MainNavComponent, FeatureBannerComponent]
})
export class ProfilePageModule {}
