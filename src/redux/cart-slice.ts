import { createSlice } from '@reduxjs/toolkit';
import { Guitar } from '../types/types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as Guitar[],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
