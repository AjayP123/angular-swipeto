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

  constructor(public appService: AppService) {}

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
