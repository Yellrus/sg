import { createAction } from 'redux-actions';
import * as types from './types';

export const fetchProfileRequest = createAction(types.FETCH_PROFILE_REQUEST);
export const fetchProfileSuccess = createAction(types.FETCH_PROFILE_SUCCESS);
export const fetchProfileFailure = createAction(types.FETCH_PROFILE_FAILURE);
