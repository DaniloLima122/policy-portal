import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from '../card/card.component';




@Component({
  selector: 'm-cards-container',
  template: `
    <div>
      <m-card></m-card>
      <m-card></m-card>
      <m-card></m-card>
    </div>
  `
})
class CardsContainerMock {
}


describe('CardsContainerComponent', () => {
  let component: CardsContainerMock;
  let fixture: ComponentFixture<CardsContainerMock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsContainerMock],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsContainerMock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
