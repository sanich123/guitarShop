import {configureStore} from '@reduxjs/toolkit';
import { guitarsApi } from './guitars-api';

export const store = configureStore({
  reducer: {
    [guitarsApi.reducerPath]: guitarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(guitarsApi.middleware),
});
