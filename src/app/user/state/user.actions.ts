import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UserActionTypes {
    SetCurrentUser = '[User] Set the current user',
    ClearCurrentUser = '[User] Sets the current user to null',
    IsLoggedOn = '[User] Check for login status',
    LoadUsers = '[User] Initiate a load of all users',
    LoadUsersSuccess = '[User] Successfull load of users',
    LoadUsersFail = '[User] Load of users failed'
}

export class SetCurrentUser implements Action {
    readonly type = UserActionTypes.SetCurrentUser;
    constructor(public payload: User) {}
}

export class ClearCurrentUser implements Action {
    readonly type = UserActionTypes.ClearCurrentUser;
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: User[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LoadUsersFail;
  constructor(public payload: string) {}
}

export type UserActions = SetCurrentUser |
                          ClearCurrentUser |
                          LoadUsers |
                          LoadUsersSuccess |
                          LoadUsersFail;
