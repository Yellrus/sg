/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { authFetchMiddleware } from './modules/auth';

import rootReducer, { rooSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth'],
};

const composeEnhancers = composeWithDevTools({
  name: 'MyApp',
  actionsBlacklist: ['REDUX_STORAGE_SAVE'],
});

const enhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware, authFetchMiddleware),
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, enhancers);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);

sagaMiddleware.run(rooSaga);

export { store, persistor };
