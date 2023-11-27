import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import metamaskReducer from '../features/metamask/metamaskSlice'
export const store = configureStore({
  reducer: {
    metamask: metamaskReducer,
  },
});
