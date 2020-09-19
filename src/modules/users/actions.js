import { createAction } from 'redux-actions';
import * as types from './types';

export const fetchUserListRequest = createAction(types.FETCH_USER_LIST_REQUEST);
export const fetchUserListSuccess = createAction(types.FETCH_USER_LIST_SUCCESS);
export const fetchUserListFailure = createAction(types.FETCH_USER_LIST_FAILURE);
