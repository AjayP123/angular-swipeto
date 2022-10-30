import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TournamentAndTeamsComponent } from './tournamentsandteam/tournaments-teams.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tournamets',
    component: TournamentAndTeamsComponent,
  },
  {
    path: 'leagues',
    component: LeaguesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
