import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage';

require('mutationobserver-shim');

describe('ProfilePage', () => {
  const initialState = { auth: { token: null }, profile: { isLoading: false } };
  const mockStore = configureStore();
  let store;

  it('render success', () => {
    store = mockStore(initialState);
    const { queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfilePage />
        </BrowserRouter>
      </Provider>,
    );

    expect(queryByTestId('profile-page')).toBeTruthy();
  });
});
