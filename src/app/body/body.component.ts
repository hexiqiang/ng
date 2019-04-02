import { Component, OnInit } from '@angular/core';
import { GOODS } from '../goods-list';
import {Goods} from '../goods';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  goods = GOODS
  selectedGood: Goods;
  constructor() { }

  ngOnInit() {
  }

  onSelect(good: Goods): void {
    this.selectedGood = good;
    console.log(this.selectedGood);
  }
}
