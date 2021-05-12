import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

enum cardsViewOptions {
  GRID = "grid",
  LIST = "list",
}

@Component({
  selector: 'm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterContentInit {

  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>;

  private thereTabSelected = false;

  @Output()
  changeLayout = new EventEmitter<cardsViewOptions>();

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

  changeCardsView(cardView: string) {

    const viewSelected = cardsViewOptions[cardView.toUpperCase()];
    this.changeLayout.emit(viewSelected);
    console.log(cardView)
  }
}
