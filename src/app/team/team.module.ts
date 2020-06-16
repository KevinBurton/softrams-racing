import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TeamEffects } from './state/team.effects';

import { teamReducer } from './state/team.reducer';

import { TeamComponent } from './containers/team/team.component';
import { AddTeamComponent } from '../add-team/containers/add-team/add-team.component';

import { SharedModule } from '../shared/shared.module';
import { TeamListComponent } from './components/team-list/team-list.component';
import { AddTeamDisplayComponent } from '../add-team/components/add-team-display/add-team-display.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'teams', component: TeamComponent},
      {path: 'addTeam', component: TeamComponent}
    ]),
    StoreModule.forFeature('team', teamReducer),
    EffectsModule.forFeature(
      [ TeamEffects ]
    ),
  ],
  declarations: [
    TeamComponent,
    TeamListComponent,
    AddTeamComponent,
    AddTeamDisplayComponent
  ],
  exports: [
    TeamComponent,
    TeamListComponent,
    AddTeamComponent,
    AddTeamDisplayComponent
  ]

})
export class TeamModule { }
