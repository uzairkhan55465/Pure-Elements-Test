// src/store/reducers/index.js
import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductsSlice from './ProductsSlice';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductsSlice
});

export default rootReducer;
