import {Component, OnInit} from '@angular/core';
import {Btn_Styles} from "../../shared/interfaces/buttons";

@Component({
  selector: 'app-newsletter-subscribe-input',
  templateUrl: './newsletter-subscribe-input.component.html',
  styleUrls: ['./newsletter-subscribe-input.component.scss'],
})
export class NewsletterSubscribeInputComponent implements OnInit {
  subBtnOptions = {
    label: 'Email Me!',
    btnStyleType: Btn_Styles.primary
  };

  constructor() {
  }

  ngOnInit() {
  }

}
