import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterContentInit {

  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    // console.log(this.tabs)
  }

}
