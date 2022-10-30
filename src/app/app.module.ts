// imports
import { BrowserModule } from '@angular/platform-browser';
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

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    ItemDirective,
    TournamentAndTeamsComponent,
    HomeComponent,
    LeaguesComponent,
    BetContainerComponent
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
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
