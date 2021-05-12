import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'm-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
  animations: [
    trigger('staggerCards', [
      transition("* <=> *", [
        query('m-card', [
          style({ opacity: 0, transform: 'translateY(1rem)' }),
          stagger(100, [
            animate('.7s .2s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ]),
        ])
      ])
    ])
  ]
})
export class CardsContainerComponent {

  @Input() name;
  @Input() cardsLayout;

  constructor() { }


}
