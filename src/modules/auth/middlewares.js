import { logInRequest, logInSuccess, logInFailure } from './actions';
// Use this middleware, because not api method for login

// Harcoding Admin login
const ADMIN_DATA = {
  username: 'Admin',
  passowrd: '12345',
};

const dispatchActions = ({ username, password }, store) => {
  if (
    username.trim() !== ADMIN_DATA.username ||
    password.trim() !== ADMIN_DATA.passowrd
  ) {
    return store.dispatch(
      logInFailure('Имя пользователя или пароль введены не верно'),
    );
  }
  return store.dispatch(logInSuccess(true));
};

export const authFetchMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  switch (action.type) {
    case logInRequest.toString():
      return dispatchActions(action.payload, store);

    default:
      return result;
  }
};
