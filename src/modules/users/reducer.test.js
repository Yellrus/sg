import reducer, { initialState } from './reducer';
import { fetchUserListRequest, fetchUserListSuccess } from './actions';

describe('UserList reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('UserList REQUEST', () => {
    expect(reducer(initialState, fetchUserListRequest())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('UserList SUCCESS', () => {
    const dataMock = [{ key: 'value', key2: 'value' }];
    expect(reducer(initialState, fetchUserListSuccess(dataMock))).toEqual({
      ...initialState,
      data: dataMock,
    });
  });
});
