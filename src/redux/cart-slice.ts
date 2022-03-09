import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as {id: number, quantity: 1, price: number}[],
  reducers: {
    addToCart: (state, action) => {
      const {id, price} = action.payload;
      state.push({id: id, quantity: 1, price: price});
    },
    changeQuantity: (state, action) => {
      const {amount, uniq} = action.payload;
      state.map((cart) => cart.id === uniq ? cart.quantity = amount : cart.quantity);
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
