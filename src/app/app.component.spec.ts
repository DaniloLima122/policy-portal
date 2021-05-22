import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { InputComponent } from './components/input/input.component';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Policy } from './services/model/Policy';
import { PolicyService } from './services/policy.service';
import { HeaderComponent } from './components/header/header.component';
import { TabComponent } from './components/tab/tab.component';
import { TabItemComponent } from './components/tab/tab-item/tab-item.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const serviceMock = {
  getPolicies: jest.fn().mockReturnValue(of<Policy>()),
  favoritePolicy: jest.fn().mockReturnValue(of<Policy>())
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        InputComponent,
        TabComponent,
        TabItemComponent,
        CardsContainerComponent,
        CardComponent
      ],
      providers: [{
        provide: PolicyService,
        usValue: serviceMock
      }],
      imports: [ReactiveFormsModule, FormsModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
