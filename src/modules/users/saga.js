// This file for work with side effect
import { takeEvery, call, put } from 'redux-saga/effects';
import { getData } from '../../helplers/api';
import { ROOT_URL } from '../../helplers/constants';
import {
  fetchUserListRequest,
  fetchUserListSuccess,
  fetchUserListFailure,
} from './actions';

export const userListApi = ({ page, count }) =>
  getData(`${ROOT_URL}?page=${page}&results=${count}&seed=abc`);

export function* watchUserList(action) {
  try {
    const result = yield call(userListApi, action.payload);
    const { results } = result;
    yield put(fetchUserListSuccess(results));
  } catch (err) {
    const { error } = err;
    yield put(fetchUserListFailure(error || 'Error server'));
  }
}

function* userListSaga() {
  yield takeEvery(fetchUserListRequest, watchUserList);
}

export { userListSaga };
