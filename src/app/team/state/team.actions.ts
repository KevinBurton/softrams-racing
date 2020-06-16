import { Action } from '@ngrx/store';
import { Team } from '../../models/team';

export enum TeamActionTypes {
    SetTeams = '[Team] Set the team list',
    LoadTeams = '[Team] Initiate load of teams from DB',
    LoadTeamsSuccess = '[Team] Successfull load of teams',
    LoadTeamsFail = '[Team] Load teams failed'
}

export class SetTeams implements Action {
    readonly type = TeamActionTypes.SetTeams;
    constructor(public payload: Team[]) {}
}

export class LoadTeams implements Action {
  readonly type = TeamActionTypes.LoadTeams;
}

export class LoadTeamsSuccess implements Action {
  readonly type = TeamActionTypes.LoadTeamsSuccess;
  constructor(public payload: Team[]) {}
}
export class LoadTeamsFail implements Action {
  readonly type = TeamActionTypes.LoadTeamsFail;
  constructor(public payload: string) {}
}

export type TeamActions = SetTeams |
                             LoadTeams |
                             LoadTeamsSuccess |
                             LoadTeamsFail;
