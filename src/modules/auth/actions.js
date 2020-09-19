import { createAction } from 'redux-actions';
import * as types from './types';

export const logInRequest = createAction(types.LOGIN_REQUEST);
export const logInSuccess = createAction(types.LOGIN_SUCCESS);
export const logInFailure = createAction(types.LOGIN_FAILURE);
export const logOut = createAction(types.LOGOUT);
