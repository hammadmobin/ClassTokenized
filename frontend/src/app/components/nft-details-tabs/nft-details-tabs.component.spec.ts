import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {NftDetailsTabsComponent} from './nft-details-tabs.component';

describe('NftDetailsTabsComponent', () => {
  let component: NftDetailsTabsComponent;
  let fixture: ComponentFixture<NftDetailsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NftDetailsTabsComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NftDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
