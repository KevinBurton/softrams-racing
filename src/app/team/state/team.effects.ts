import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { TeamService } from '../../services/team.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as teamActions from './team.actions';

@Injectable()
export class TeamEffects {

  constructor(private productService: TeamService,
              private actions$: Actions) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(teamActions.TeamActionTypes.LoadTeams),
    mergeMap(action =>
      this.productService.getTeams().pipe(
        map(teams => (new teamActions.LoadTeamsSuccess(teams))),
        catchError(err => of(new teamActions.LoadTeamsFail(err)))
      )
    )
  );

}
