import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-hero',
  templateUrl: './profile-hero.component.html',
  styleUrls: ['./profile-hero.component.scss'],
})
export class ProfileHeroComponent implements OnInit {
  @Input() userData: { id: string; [key: string]: any };
  constructor() {
  }

  ngOnInit() {
    console.log('userData');
    console.log(this.userData);
  }

}
