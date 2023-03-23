import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './base-products';
import mainReducer from './main-slice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    main: mainReducer,
  },
});
export default store;
