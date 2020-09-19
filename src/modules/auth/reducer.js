import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { logInRequest, logInSuccess, logInFailure, logOut } from './actions';

export const initialState = {
  isLoggedIn: false,
  error: null,
};

const isLoggedIn = handleActions(
  {
    [logInRequest]: () => false,
    [logInSuccess]: () => true,
    [logInFailure]: () => false,
    [logOut]: () => false,
  },
  initialState.isLoggedIn,
);

const error = handleActions(
  {
    [logInRequest]: () => null,
    [logInSuccess]: () => null,
    [logInFailure]: (_state, action) => action.payload,
    [logOut]: () => null,
  },
  initialState.error,
);

export default combineReducers({
  isLoggedIn,
  error,
});
