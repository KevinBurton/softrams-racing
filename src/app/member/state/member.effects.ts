import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, map, catchError } from 'rxjs/operators';

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
  loadMembers$: Observable<Action> = this.actions$.pipe(
    ofType(memberActions.MemberActionTypes.LoadMembers),
    mergeMap(action =>
      this.memberService.getMembers().pipe(
        map(members => (new memberActions.LoadMembersSuccess(members))),
        catchError(err => of(new memberActions.LoadMembersFail(err)))
      )
    )
  );
  @Effect()
  addMember$: Observable<Action> = this.actions$.pipe(
    ofType<memberActions.AddMember>(memberActions.MemberActionTypes.AddMember),
    switchMap((action) =>
      this.memberService.addMember(action.payload).pipe(
        map(member => (new memberActions.AddMemberSuccess(member))),
        catchError(err => of(new memberActions.AddMemberFail(err)))
      )
    )
  );
  @Effect()
  deleteMember$: Observable<Action> = this.actions$.pipe(
    ofType<memberActions.DeleteMember>(memberActions.MemberActionTypes.DeleteMember),
    switchMap((action) =>
      this.memberService.deleteMember(action.payload).pipe(
        map(member => (new memberActions.AddMemberSuccess(member))),
        catchError(err => of(new memberActions.AddMemberFail(err)))
      )
    )
  );
}
