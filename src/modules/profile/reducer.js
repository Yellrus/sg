import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchProfileFailure,
  fetchProfileRequest,
  fetchProfileSuccess,
} from './actions';

export const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const data = handleActions(
  {
    [fetchProfileRequest]: () => {},
    [fetchProfileSuccess]: (_state, action) => action.payload,
  },
  initialState.data,
);

const isLoading = handleActions(
  {
    [fetchProfileRequest]: () => true,
    [fetchProfileSuccess]: () => false,
    [fetchProfileFailure]: () => false,
  },
  initialState.isLoading,
);

const error = handleActions(
  {
    [fetchProfileRequest]: () => null,
    [fetchProfileFailure]: (_state, action) => action.payload,
  },
  initialState.error,
);

export default combineReducers({ data, isLoading, error });
