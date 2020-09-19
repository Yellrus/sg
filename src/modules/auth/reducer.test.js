import reducer, { initialState } from './reducer';
import { logInRequest, logInSuccess, logOut } from './actions';

describe('Auth reducer', () => {
  it('Request', () => {
    expect(reducer(initialState, logInRequest())).toEqual({
      ...initialState,
    });
  });

  it('Success', () => {
    expect(reducer(initialState, logInSuccess())).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });

  it('LogOut', () => {
    expect(reducer(initialState, logOut())).toEqual({
      ...initialState,
    });
  });
});
