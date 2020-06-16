import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Team } from '../../models/team';
import { TeamActionTypes, TeamActions } from './team.actions';

export interface TeamState {
    list: Team[];
    error: string;
}

const initialState: TeamState = {
    list: [],
    error: ''
};

const getTeamFeatureState = createFeatureSelector<TeamState>('team');

export const getTeams = createSelector(
    getTeamFeatureState,
    state => state.list
);

export const getError = createSelector(
  getTeamFeatureState,
  state => state.error
);

export function teamReducer(state = initialState, action: TeamActions): TeamState {
    switch (action.type) {
      case TeamActionTypes.SetTeams:
        return {
          ...state,
          list: action.payload
        };
      case TeamActionTypes.LoadTeamsSuccess:
        return {
          ...state,
          list: action.payload,
          error: ''
        };
      case TeamActionTypes.LoadTeamsFail:
        return {
          ...state,
          list: [],
          error: action.payload
        };
      default:
        return state;
    }
}
