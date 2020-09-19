import { takeEvery, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { watchProfile, profileSaga, profileApi } from './saga';

import { fetchProfileRequest } from './actions';

describe('Profile saga', () => {
  const generator = profileSaga();

  it(`Should wait for ${fetchProfileRequest}`, () => {
    const next = generator.next();

    expect(next.value).toEqual(takeEvery(fetchProfileRequest, watchProfile));
  });

  it('Should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('fetchProfileFlow Saga', () => {
  const iterator = cloneableGenerator(watchProfile)(fetchProfileRequest());

  it('calls api', () => {
    expect(iterator.next().value).toEqual(call(profileApi));
  });
});
