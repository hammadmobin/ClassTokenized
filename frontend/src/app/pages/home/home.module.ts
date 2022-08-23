import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {ProfilePageModule} from "../profile/profile.module";
import {CollectionCardComponent} from "../../components/collection-card/collection-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ProfilePageModule
  ],
  declarations: [HomePage, CollectionCardComponent]
})
export class HomePageModule {
}
