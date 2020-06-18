import { Action } from '@ngrx/store';
import { Team } from '../../models/team';

export enum TeamActionTypes {
    SetTeams = '[Team] Set the team list',
    LoadTeams = '[Team] Initiate load of teams from DB',
    LoadTeamsSuccess = '[Team] Successfull load of teams',
    LoadTeamsFail = '[Team] Load teams failed',
    AddTeam = '[Team] Initiate add of team from DB',
    AddTeamSuccess = '[Team] Successfull addition of team',
    AddTeamFail = '[Team] Add team failed',
    DeleteTeam = '[Member] Delete team by id',
    DeleteTeamSuccess = '[Team] Successfull deletion of team',
    DeleteTeamFail = '[Team] Delete team failed',
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
export class AddTeam implements Action {
  readonly type = TeamActionTypes.AddTeam;
  constructor(public payload: Team) {}
}
export class AddTeamSuccess implements Action {
  readonly type = TeamActionTypes.AddTeamSuccess;
  constructor(public payload: Team) {}
}
export class AddTeamFail implements Action {
  readonly type = TeamActionTypes.AddTeamFail;
  constructor(public payload: string) {}
}

export class DeleteTeam implements Action {
  readonly type = TeamActionTypes.DeleteTeam;
  constructor(public payload: number) {}
}
export class DeleteTeamSuccess implements Action {
  readonly type = TeamActionTypes.DeleteTeamSuccess;
  constructor(public payload: number) {}
}
export class DeleteTeamFail implements Action {
  readonly type = TeamActionTypes.DeleteTeamFail;
  constructor(public payload: string) {}
}

export type TeamActions = SetTeams |
                          LoadTeams |
                          LoadTeamsSuccess |
                          LoadTeamsFail |
                          AddTeam |
                          AddTeamSuccess |
                          AddTeamFail |
                          DeleteTeam |
                          DeleteTeamSuccess |
                          DeleteTeamFail;
