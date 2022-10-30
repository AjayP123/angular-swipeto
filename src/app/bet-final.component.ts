import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { AppService } from './app.service';
export const slideOutLeft = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(-150%, 0, 0)', opacity: 0, offset: 1 }),
];
export const slideOutRight = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(150%, 0, 0)', opacity: 0, offset: 1 }),
];
export const slideOutDown = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(0, -150%, 0)', opacity: 0, offset: 1 }),
];
export const slideOutUp = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(0, 150%, 0)', opacity: 0, offset: 1 }),
];
@Component({
  selector: 'bet-container',
  templateUrl: './bet-final.component.html',
  styleUrls: ['./bet-final.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(1000, keyframes(slideOutLeft))),
      transition('* => slideOutRight', animate(1000, keyframes(slideOutRight))),
      transition('* => slideOutDown', animate(1000, keyframes(slideOutDown))),
      transition('* => slideOutUp', animate(1000, keyframes(slideOutUp))),
    ]),
  ],
})
export class BetContainerComponent {
  animationState: string;
  bindingObject: any = {};

  constructor(public appService: AppService) {
    this.appService.getMostSuitableBet().subscribe((data: any) => {
      this.pickTheBet(data.SSResponse.children[0].event);
    });
  }

  pickTheBet(eventData) {
    this.bindingObject.teamNames = eventData.name;
    this.bindingObject.startTime = eventData.startTime;
    this.bindingObject.categoryName = eventData.categoryName;
    this.bindingObject.league = eventData.typeName;
    this.bindingObject.marketName =
      eventData.children[0].market.templateMarketName;
    eventData.children[0].market.children.forEach((data) => {
      if (data.outcome.outcomeMeaningMinorCode === 'A') {
        this.bindingObject.away =
          data.outcome.children[0].price.priceNum +
          '/' +
          data.outcome.children[0].price.priceDen;
      }
      if (data.outcome.outcomeMeaningMinorCode === 'D') {
        this.bindingObject.draw =
          data.outcome.children[0].price.priceNum +
          '/' +
          data.outcome.children[0].price.priceDen;
      }
      if (data.outcome.outcomeMeaningMinorCode === 'H') {
        this.bindingObject.home =
          data.outcome.children[0].price.priceNum +
          '/' +
          data.outcome.children[0].price.priceDen;
      }
    });
  }

  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
