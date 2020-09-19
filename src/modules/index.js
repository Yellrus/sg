import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fork } from 'redux-saga/effects';

// reducers and operations(saga)
import auth from './auth';
import profile, { profileSaga } from './profile';
import users, { userListSaga } from './users';

// persist
const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['error'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  profile,
  users,
});

export function* rooSaga() {
  yield fork(profileSaga);
  yield fork(userListSaga);
}
