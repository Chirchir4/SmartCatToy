// src/store/reducers/index.js
import { combineReducers } from "redux";
import cartReducer from "../cart/cart.slice"
// Update the path
const rootReducer = combineReducers({
  cart: cartReducer,
 
  // Add more slices here
});

export default rootReducer;
