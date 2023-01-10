import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import uiSlice, { uiActions } from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
});

export default store;
