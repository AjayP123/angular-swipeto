import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'bet-container',
  templateUrl: './bet-final.component.html',
  styleUrls: ['./bet-fina.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition(
        '* => slideOutLeft',
        animate(1000, keyframes(kf.slideOutLeft))
      ),
      transition(
        '* => rotateOutUpRight',
        animate(1000, keyframes(kf.rotateOutUpRight))
      ),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ]),
  ],
})
export class BetContainerComponent {
  animationState: string;

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
