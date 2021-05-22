import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { CardsContainerComponent } from '../cards-container/cards-container.component';
import { TabItemComponent } from './tab-item/tab-item.component';


@Component({
  selector: 'm-tab-mock',
  template: `
    <div>
      <m-tab-item>
      <m-tab-item>
      </m-tab-item>
      </m-tab-item>
      <m-tab-item>
      </m-tab-item>
    </div>
  `
})
class TabComponentMock {

  selectTab(tab: TabItemComponent) {
    tab.tabIsSelected = true;
  }

}

describe('TabComponent', () => {
  let component: TabComponentMock;
  let fixture: ComponentFixture<TabComponentMock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabComponentMock, TabItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponentMock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should first tab start selected', () => {

    let indexOfSelectedTab = null;

    fixture.detectChanges();

    const tabItems = fixture.debugElement.queryAll(By.directive(TabItemComponent));


    component.selectTab(tabItems[0].context)

    indexOfSelectedTab = tabItems.findIndex((tab) => {

      return (tab.context as TabItemComponent).tabIsSelected;
    });

    expect(indexOfSelectedTab).toBe(0);
  })

  it('should select a tab', () => {

    const tableToBeSelected = 1;

    let selectedTab = null;

    const tabItems = fixture.debugElement.queryAll(By.directive(TabItemComponent));

    const spySelectTab = jest.spyOn(component, 'selectTab');

    component.selectTab(tabItems[tableToBeSelected].context);

    fixture.detectChanges();

    selectedTab = tabItems.findIndex((tab) => {

      return (tab.context as TabItemComponent).tabIsSelected;
    });

    expect(spySelectTab).toHaveBeenCalledTimes(1);
    expect(selectedTab).toBe(tableToBeSelected);
  })
});
