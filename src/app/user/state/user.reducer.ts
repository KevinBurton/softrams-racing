import { User } from '../../models/user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
  currentUser: User;
  list: User[];
  error: string;
  isLoggedOn: boolean;
}

export interface State extends fromRoot.State {
  user: UserState;
}

const initialState: UserState = {
  currentUser: null,
  isLoggedOn: false,
  list: [],
  error: ''
};

const getUserFeatureState = createFeatureSelector<UserState>('user');
export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);
export const getUsers = createSelector(
  getUserFeatureState,
  state => state.list
);

export const getError = createSelector(
  getUserFeatureState,
  state => state.error
);

export const getStatus = createSelector(
  getUserFeatureState,
  state => state.isLoggedOn
);

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.SetCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedOn: true
      };
    case UserActionTypes.ClearCurrentUser:
        return {
          ...state,
          currentUser: null,
          isLoggedOn: false
        };
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        list: action.payload,
        error: ''
      };
      case UserActionTypes.LoadUsersFail:
      return {
        ...state,
        list: [],
        error: action.payload
      };
      default:
      return state;
  }
}
