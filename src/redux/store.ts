import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { guitarsApi } from './guitars-api';
import cartSlice from './cart-slice/cart-slice';
import discountSlice from './discount-slice/discount-slice';

const rootReducer = combineReducers({
  [guitarsApi.reducerPath]: guitarsApi.reducer,
  cart: cartSlice,
  discount: discountSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(guitarsApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
