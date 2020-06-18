import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Member } from '../../models/member';
import { MemberActionTypes, MemberActions } from './member.actions';

export interface MemberState {
    list: Member[];
    error: string;
}

const initialState: MemberState = {
    list: [],
    error: ''
};

const getMemberFeatureState = createFeatureSelector<MemberState>('member');

export const getMembers = createSelector(
    getMemberFeatureState,
    state => state.list
);

export const getError = createSelector(
  getMemberFeatureState,
  state => state.error
);

export function memberReducer(state = initialState, action: MemberActions): MemberState {
    switch (action.type) {
      case MemberActionTypes.SetMembers:
        return {
          ...state,
          list: action.payload
        };
      case MemberActionTypes.LoadMembersSuccess:
        return {
          ...state,
          list: action.payload,
          error: ''
        };
      case MemberActionTypes.LoadMembersFail:
        return {
          ...state,
          list: [],
          error: action.payload
        };

      case MemberActionTypes.AddMember:
        return {
          ...state,
          list: [...state.list, action.payload]
        }
      case MemberActionTypes.AddMemberSuccess:
        return {
          ...state,
          list: [...state.list,action.payload],
          error: ''
        };
      case MemberActionTypes.AddMemberFail:
        return {
          ...state,
          list: [],
          error: action.payload
        };
      case MemberActionTypes.DeleteMember:
        return {
          ...state,
          list: state.list.filter(m => parseInt(m.id) != action.payload),
          error: ''
        };
      default:
        return state;
    }
}
