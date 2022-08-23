import {Component, Input, OnInit} from '@angular/core';
import {Btn_Styles} from "../../shared/interfaces/buttons";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnOptions: {
    label: string;
    url?: string;
    btnStyleType?: number;
  } = {
    label: 'Load More',
    btnStyleType: Btn_Styles.secondary
  };
  BTN_STYLE = Btn_Styles;

  constructor() {
  }

  ngOnInit() {
    console.log(this.btnOptions);
  }

}
