import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchUserListRequest,
  fetchUserListSuccess,
  fetchUserListFailure,
} from './actions';

export const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const data = handleActions(
  {
    [fetchUserListRequest]: () => [],
    [fetchUserListSuccess]: (_state, action) => action.payload,
  },
  initialState.data,
);

const isLoading = handleActions(
  {
    [fetchUserListRequest]: () => true,
    [fetchUserListSuccess]: () => false,
    [fetchUserListFailure]: () => false,
  },
  initialState.isLoading,
);

const error = handleActions(
  {
    [fetchUserListRequest]: () => null,
    [fetchUserListFailure]: (_state, action) => action.payload,
  },
  initialState.error,
);

export default combineReducers({ data, isLoading, error });
