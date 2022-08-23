import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {NftVisualComponent} from './nft-visual.component';

describe('NftVisualComponent', () => {
  let component: NftVisualComponent;
  let fixture: ComponentFixture<NftVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NftVisualComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NftVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
