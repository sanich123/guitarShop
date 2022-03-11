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
    amountQuantity: (state, action) => {
      const {id, value} = action.payload;
      state.map((cart) => cart.id === id ? cart.quantity = value : cart.quantity);
    },
    deleteFromCart: (state, action) => {
      const {id} = action.payload;
      const index = state.findIndex((cart) => cart.id === id);
      state.splice(index, 1);
    },
  },
});

export const {addToCart, amountQuantity, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;
