import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { MemberService } from '../../services/member.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as memberActions from './member.actions';

@Injectable()
export class MemberEffects {

  constructor(private memberService: MemberService,
              private actions$: Actions) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(memberActions.MemberActionTypes.LoadMembers),
    mergeMap(action =>
      this.memberService.getMembers().pipe(
        map(products => (new memberActions.LoadMembersSuccess(products))),
        catchError(err => of(new memberActions.LoadMembersFail(err)))
      )
    )
  );

}
