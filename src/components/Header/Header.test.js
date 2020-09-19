import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  const initialState = { auth: { isLoggedIn: false } };
  const mockStore = configureStore();
  let store;

  it('render success', () => {
    store = mockStore(initialState);
    const { queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(queryByTestId('header')).toBeTruthy();
  });
});
