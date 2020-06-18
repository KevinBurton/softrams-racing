import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, switchMap, map, tap, catchError } from 'rxjs/operators';

import { TeamService } from '../../services/team.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as teamActions from './team.actions';

@Injectable()
export class TeamEffects {

  constructor(private teamService: TeamService,
              private actions$: Actions) { }

  @Effect()
  loadTeams$: Observable<Action> = this.actions$.pipe(
    ofType(teamActions.TeamActionTypes.LoadTeams),
    mergeMap(action =>
      this.teamService.getTeams().pipe(
        map(teams => (new teamActions.LoadTeamsSuccess(teams))),
        catchError(err => of(new teamActions.LoadTeamsFail(err)))
      )
    )
  );
  @Effect()
  addMember$: Observable<Action> = this.actions$.pipe(
    ofType<teamActions.AddTeam>(teamActions.TeamActionTypes.AddTeam),
    switchMap((action) =>
      this.teamService.addTeam(action.payload).pipe(
        map(team => (new teamActions.AddTeamSuccess(team))),
        catchError(err => of(new teamActions.AddTeamFail(err)))
      )
    )
  );
  @Effect({ dispatch: false })
  deleteMember$: Observable<Action> = this.actions$.pipe(
    ofType<teamActions.DeleteTeam>(teamActions.TeamActionTypes.DeleteTeam),
    switchMap((action) =>
      this.teamService.deleteTeam(action.payload).pipe(
        tap((data) => console.log(`Delete team: ${data}`)),
        map(team => (new teamActions.DeleteTeamSuccess(team))),
        catchError(err => of(new teamActions.DeleteTeamFail(err)))
      )
    )
  );

}
