import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should favorite card', () => {
    const spyFavorite = jest.spyOn(component, 'favoriteCard');

    const favoriteLabel: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;

    favoriteLabel.click();

    fixture.detectChanges();

    expect(spyFavorite).toHaveBeenCalled();
    expect(favoriteLabel.classList.contains('--favorite')).toBeTruthy();
    expect(component.cardIsFavorite).toBeTruthy();

  })
});
