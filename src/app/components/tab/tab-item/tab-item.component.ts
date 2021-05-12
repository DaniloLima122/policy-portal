import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {

  @Input() title;

  private isSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  get tabIsSelected() {
    return this.isSelected;
  }

  set tabIsSelected(isSelected: boolean) {
    this.isSelected = isSelected;
  }

}
