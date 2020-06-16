import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UserService } from '../../services/user.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(private userService: UserService,
              private actions$: Actions) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(action =>
      this.userService.getUsers().pipe(
        map(users => (new userActions.LoadUsersSuccess(users))),
        catchError(err => of(new userActions.LoadUsersFail(err)))
      )
    )
  );

}
