import redux from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './base-products';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
export default store;
