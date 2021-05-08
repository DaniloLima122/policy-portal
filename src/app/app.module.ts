import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { InputComponent } from '@components/input/input.component';
import { TabComponent } from '@components/tab/tab.component';
import { TabItemComponent } from '@components/tab/tab-item/tab-item.component';
import { CardsContainerComponent } from '@components/cards-container/cards-container.component';
import { CardComponent } from '@components/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    TabComponent,
    TabItemComponent,
    CardsContainerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
