import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ProfileHeroComponent} from './profile-hero.component';

describe('ProfileHeroComponent', () => {
  let component: ProfileHeroComponent;
  let fixture: ComponentFixture<ProfileHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileHeroComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
