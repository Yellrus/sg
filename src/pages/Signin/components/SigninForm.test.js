import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './SigninForm';

require('mutationobserver-shim');

describe('SignInForm', () => {
  const initialState = { auth: { isLoading: false, error: null } };
  const mockStore = configureStore();
  let store;

  it('Render correctly', () => {
    store = mockStore(initialState);
    const { queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>,
    );

    expect(queryByTestId('login-form')).toBeTruthy();
  });
});
