// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './CartReducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
