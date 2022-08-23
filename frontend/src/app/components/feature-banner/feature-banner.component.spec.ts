import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FeatureBannerComponent} from './feature-banner.component';

describe('FeatureBannerComponent', () => {
  let component: FeatureBannerComponent;
  let fixture: ComponentFixture<FeatureBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureBannerComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
