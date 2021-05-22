import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Policy } from 'app/services/model/Policy';
import { PolicyService } from 'app/services/policy.service';
import { of } from 'rxjs';

import { CardComponent } from './card.component';

const serviceMock = {
  favoritePolicy: jest.fn().mockReturnValue(of<Policy>())
}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: PolicyService,
          useValue: serviceMock
        }]
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

  it('should favorite card', fakeAsync(() => {

    component.cardIsFavorite = false;

    component.cardData = {
      id: 0,
      favorite: false,
      category: "",
      group: "attested",
      name: "",
      status: 'danger',
      version: ""
    };


    const spyFavorite = jest.spyOn(component, 'favoriteCard');
    const spyFavoriteService = jest.spyOn(serviceMock, 'favoritePolicy');

    const favoriteLabel: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;

    favoriteLabel.click();

    expect(spyFavorite).toHaveBeenCalled();
    expect(spyFavoriteService).toHaveBeenCalled();

    tick();

  }))
});
