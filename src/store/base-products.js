import { createSlice } from '@reduxjs/toolkit';
const initialProductList = {
  base: {
    item1: {
      id: 'p1',
      title: 'Супер-Товар',
      price: 7,
      quantity: 0,
      description:
        'Благодаря своему высокому качеству, этот товар прослужит вам очень долго.',
    },
  },
};

const productsSlice = createSlice({
  name: 'base',
  initialState: initialProductList,
  reducers: {
    increment(state) {
      state.base.item1.quantity++;
    },
    decrement(state) {
      if (state.base.item1.quantity > 0) {
        state.base.item1.quantity--;
      } else {
        state.base.item1.quantity = 0;
      }
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;
