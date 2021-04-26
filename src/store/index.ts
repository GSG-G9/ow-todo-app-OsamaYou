import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createStore = () => {
  const store = configureStore({
    reducer: {},
  });

  return { store };
};

export default createStore;
