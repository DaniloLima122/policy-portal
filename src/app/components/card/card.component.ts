import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PolicyService } from 'app/services/policy.service';

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

  constructor(private policyService: PolicyService) { }

  @Input()
  status: cardStatus = cardStatus.STANDARD;

  @Input()
  id: number;


  favoriteCard() {
    this.cardIsFavorite = !this.checkbox.value;
    this.policyService.favoritePolicy(this.id);
  }

  get currentCardStatus(): string {

    return cardStatus[this.status.toUpperCase()];
  }

}
