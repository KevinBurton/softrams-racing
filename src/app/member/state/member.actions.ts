import { Action } from '@ngrx/store';
import { Member } from '../../models/member';

export enum MemberActionTypes {
    SetMembers = '[Member] Set the member list',
    LoadMembers = '[Member] Initiate load of members from DB',
    LoadMembersSuccess = '[Member] Successfull load of members',
    LoadMembersFail = '[Member] Load members failed',
    AddMember = '[Member] Add member',
    AddMemberSuccess = '[Member] SUccessfully added member',
    AddMemberFail = '[Member] Add member failed',
    DeleteMember = '[Member] Delete member by id',
    DeleteMemberSuccess = '[Member] Delete member sucess',
    DeleteMemberFail = '[Member] Delete member failure'
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

export class AddMember implements Action {
  readonly type = MemberActionTypes.AddMember;
  constructor(public payload: Member) {}
}
export class AddMemberSuccess implements Action {
  readonly type = MemberActionTypes.AddMemberSuccess;
  constructor(public payload: Member) {}
}
export class AddMemberFail implements Action {
  readonly type = MemberActionTypes.AddMemberFail;
  constructor(public payload: string) {}
}
export class DeleteMember implements Action {
  readonly type = MemberActionTypes.DeleteMember;
  constructor(public payload: number) {}
}
export class DeleteMemberSuccess implements Action {
  readonly type = MemberActionTypes.DeleteMember;
  constructor(public payload: number) {}
}
export class DeleteMemberFail implements Action {
  readonly type = MemberActionTypes.DeleteMember;
  constructor(public payload: string) {}
}

export type MemberActions = SetMembers |
                             LoadMembers |
                             LoadMembersSuccess |
                             LoadMembersFail |
                             AddMember |
                             AddMemberSuccess |
                             AddMemberFail | 
                             DeleteMember;
