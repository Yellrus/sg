import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import SigninPage from './SigninPage';

require('mutationobserver-shim');

describe('SigninPage', () => {
  const initialState = {
    auth: {},
  };
  const mockStore = configureStore();
  let store;

  it('Render correctly', () => {
    store = mockStore(initialState);
    const { queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SigninPage />
        </BrowserRouter>
      </Provider>,
    );

    expect(queryByTestId('signin-page')).toBeTruthy();
  });
});
