import { createSlice } from '@reduxjs/toolkit';

const discountSlice = createSlice({
  name: 'discount',
  initialState: {
    discount: 0,
  },
  reducers: {
    addDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const {addDiscount} = discountSlice.actions;

export default discountSlice.reducer;
