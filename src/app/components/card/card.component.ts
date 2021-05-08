import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export enum cardStatus {
  SUCCESS = '--success',
  DANGER = '--danger',
  STANDARD = '--standard',
}

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  cardIsFavorite = false;

  checkbox = new FormControl(false);

  @Input()
  status: cardStatus = cardStatus.STANDARD;

  constructor() { }

  favoriteCard() {
    this.cardIsFavorite = !this.checkbox.value;
  }

  get currentCardStatus(): string {

    return cardStatus[this.status.toUpperCase()];
  }

}
