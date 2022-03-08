import {configureStore} from '@reduxjs/toolkit';
import { guitarsApi } from './guitars-api';
import cartSlice from '../redux/cart-slice';

export const store = configureStore({
  reducer: {
    [guitarsApi.reducerPath]: guitarsApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(guitarsApi.middleware),
});
