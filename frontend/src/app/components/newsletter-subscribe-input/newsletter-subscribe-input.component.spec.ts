import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsletterSubscribeInputComponent } from './newsletter-subscribe-input.component';

describe('NewsletterSubscribeInputComponent', () => {
  let component: NewsletterSubscribeInputComponent;
  let fixture: ComponentFixture<NewsletterSubscribeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterSubscribeInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterSubscribeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
