import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NftDetailsPage} from './nft-details.page';

const routes: Routes = [
  {
    path: '',
    component: NftDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NftDetailsPageRoutingModule {
}
