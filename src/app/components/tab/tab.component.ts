import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterContentInit {

  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>;

  private thereTabSelected = false;

  constructor() { }

  ngAfterContentInit(): void {

    const someTabIsSelected = this.tabs.find(tab => tab.tabIsSelected);

    if (!someTabIsSelected) this.selectTab(this.tabs.first);
    this.therSelectedTab = true;

  }

  selectTab(tab: TabItemComponent) {
    this.tabs.forEach(tab => tab.tabIsSelected = false)
    tab.tabIsSelected = true;
    this.therSelectedTab = true;
  }

  set therSelectedTab(isSelected: boolean) {
    this.thereTabSelected = isSelected;
  }

  get therSelectedTab() {
    return this.thereTabSelected;
  }

}
