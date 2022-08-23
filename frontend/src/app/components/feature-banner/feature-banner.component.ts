import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feature-banner',
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.scss'],
})
export class FeatureBannerComponent implements OnInit {
  @Input() bannerPrompt = 'Learn and earn NFTs and digital certificates, grow your skills, build your career & become a part of amazing communities.';
  constructor() {
  }

  ngOnInit() {
  }

}
