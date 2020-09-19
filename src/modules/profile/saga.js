// This file for work with side effect
import { takeEvery, call, put } from 'redux-saga/effects';
import { getData } from '../../helplers/api';
import { ROOT_URL } from '../../helplers/constants';
import {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
} from './actions';

export const profileApi = () => getData(`${ROOT_URL}`);

export function* watchProfile() {
  try {
    const result = yield call(profileApi);
    const { results } = result;

    yield put(fetchProfileSuccess(results[0]));
  } catch (err) {
    const { error } = err;
    yield put(fetchProfileFailure(error || 'Error server'));
  }
}

function* profileSaga() {
  yield takeEvery(fetchProfileRequest, watchProfile);
}

export { profileSaga };
