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
  },
});

export const {addToCart, incrementQuantity, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;
