import { Action } from '@ngrx/store';
import { Member } from '../../models/member';

export enum MemberActionTypes {
    SetMembers = '[Member] Set the member list',
    LoadMembers = '[Member] Initiate load of members from DB',
    LoadMembersSuccess = '[Member] Successfull load of members',
    LoadMembersFail = '[Member] Load members failed'
}

export class SetMembers implements Action {
    readonly type = MemberActionTypes.SetMembers;
    constructor(public payload: Member[]) {}
}

export class LoadMembers implements Action {
  readonly type = MemberActionTypes.LoadMembers;
}

export class LoadMembersSuccess implements Action {
  readonly type = MemberActionTypes.LoadMembersSuccess;
  constructor(public payload: Member[]) {}
}
export class LoadMembersFail implements Action {
  readonly type = MemberActionTypes.LoadMembersFail;
  constructor(public payload: string) {}
}

export type MemberActions = SetMembers |
                             LoadMembers |
                             LoadMembersSuccess |
                             LoadMembersFail;
