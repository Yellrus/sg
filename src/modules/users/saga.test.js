import { takeEvery, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { watchUserList, userListSaga, userListApi } from './saga';

import { fetchUserListRequest } from './actions';

describe('Profile saga', () => {
  const generator = userListSaga();

  it(`Should wait for ${fetchUserListRequest}`, () => {
    const next = generator.next();

    expect(next.value).toEqual(takeEvery(fetchUserListRequest, watchUserList));
  });

  it('Should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('fetchProfileFlow Saga', () => {
  const iterator = cloneableGenerator(watchUserList)(
    fetchUserListRequest({ page: 1, count: 10 }),
  );

  it('calls api', () => {
    expect(iterator.next({ page: 1, count: 10 }).value).toEqual(
      call(userListApi, { page: 1, count: 10 }),
    );
  });
});
