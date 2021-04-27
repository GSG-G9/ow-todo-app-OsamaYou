import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer from './rootReducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return { store };
};
const { store } = createStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;

export default createStore;
