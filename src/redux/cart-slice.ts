/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../types/types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as Cart[],
  reducers: {
    addToCart: (state, action) => {
      const {id, price} = action.payload;
      state.push({id: id, quantity: 1, price: price});
    },
    incrementQuantity: (state, action) => {
      const {id} = action.payload;
      state.map((cart) => cart.id === id ? cart.quantity++ : cart.quantity);
    },
    decrementQuantity: (state, action) => {
      const {id} = action.payload;
      state.map((cart) => cart.id === id ? cart.quantity-- : cart.quantity);
    },
    amountQuantity: (state, action) => {
      const {id, value} = action.payload;
      console.log(id, value);
      state.map((cart) => cart.id === id ? cart.quantity = value : cart.quantity);
    },
  },
});

export const {addToCart, incrementQuantity, decrementQuantity, amountQuantity} = cartSlice.actions;

export default cartSlice.reducer;
