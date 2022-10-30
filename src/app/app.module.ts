// imports
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemDirective } from './item.directive';
import { RouterModule } from '@angular/router';
import { TournamentAndTeamsComponent } from './tournamentsandteam/tournaments-teams.component';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaguesComponent } from './leagues/leagues.component';
import { BetContainerComponent } from './bet-final.component';
import * as Hammer from 'hammerjs';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    ItemDirective,
    TournamentAndTeamsComponent,
    HomeComponent,
    LeaguesComponent,
    BetContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HammerModule,
  ],
  providers: [
    AppService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
