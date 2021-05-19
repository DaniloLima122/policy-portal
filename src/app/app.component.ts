import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap, tap, toArray } from 'rxjs/operators';
import { Policy } from './services/model/Policy';
import { PolicyService } from './services/policy.service';

interface cardsModel {
  bookmark: Observable<Policy[]>,
  pending: Observable<Policy[]>,
  attested: Observable<Policy[]>
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  title = 'policy-portal';

  currentLayout: string = 'grid';

  cardsData: cardsModel;

  constructor(private policyService: PolicyService) {
  }

  changeCardsLayout(layout: string) {
    this.currentLayout = layout;
  }

  ngOnInit() {
    this.cardsData = this.getCardsData();
  }

  getCardsData() {
    const cardsData = this.policyService.getPolicies();

    const bookmark =
      cardsData.pipe(
        switchMap(data => data),
        filter(dados => dados.favorite),
        toArray());

    const pending =
      cardsData.pipe(
        switchMap(data => data),
        filter(dados => dados.group === 'pending' && !dados.favorite),
        toArray());

    const attested =
      cardsData.pipe(
        switchMap(data => data),
        filter(dados => dados.group === 'attested' && !dados.favorite),
        toArray());

    return {
      bookmark,
      pending,
      attested
    }
  }
}
