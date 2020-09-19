import reducer, { initialState } from './reducer';
import { fetchProfileRequest, fetchProfileSuccess } from './actions';

describe('Profile reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Profile REQUEST', () => {
    expect(reducer(initialState, fetchProfileRequest())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('Profile SUCCESS', () => {
    const dataMock = { key: 'value', key2: 'value' };
    expect(reducer(initialState, fetchProfileSuccess(dataMock))).toEqual({
      ...initialState,
      data: dataMock,
    });
  });
});
