import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from '../stores/reducers';

const store = configureStore({
  reducer: {
    deviceReducer,
  },
});

export type deviceState = ReturnType<typeof store.getState>;
export default store;
