import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as {id: number, quantity: 1, price: number}[],
  reducers: {
    addToCart: (state, action) => {
      const {id, price} = action.payload;
      // eslint-disable-next-line no-console
      console.log(state);
      state.push({id: id, quantity: 1, price: price});
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
