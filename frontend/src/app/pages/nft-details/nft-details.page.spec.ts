import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {NftDetailsPage} from './nft-details.page';

describe('NftDetailsPage', () => {
  let component: NftDetailsPage;
  let fixture: ComponentFixture<NftDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NftDetailsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NftDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
