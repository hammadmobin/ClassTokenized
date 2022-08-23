import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {
  @Input() collection;
  constructor() {
  }

  ngOnInit() {
    console.log(this.collection);
  }

}
