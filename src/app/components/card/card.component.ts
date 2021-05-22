import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Policy } from 'app/services/model/Policy';
import { PolicyService } from 'app/services/policy.service';
import { take } from 'rxjs/operators';

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
export class CardComponent implements OnInit {

  cardIsFavorite = false;

  checkbox = new FormControl(false);

  constructor(private policyService: PolicyService) { }

  @Input()
  status: cardStatus = cardStatus.STANDARD;

  @Input()
  cardData = {} as Policy;

  ngOnInit() {
    this.cardIsFavorite = this.cardData.favorite
  }

  favoriteCard() {
    this.policyService
      .favoritePolicy(this.cardData.id, !this.cardIsFavorite)
      .pipe(take(1))
      .subscribe(card => { this.cardIsFavorite = card.favorite; });
  }

  get currentCardStatus(): string {

    return cardStatus[this.status.toUpperCase()];
  }

}
