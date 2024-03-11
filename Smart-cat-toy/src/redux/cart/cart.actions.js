import { setCartItems,setCartStatus, setSelectedColorToy } from "./cart.slice";

export const addCartItems=(items) => async (dispatch) => {
    
    dispatch(setCartItems(items));
  };
  export const openCart=(status) => async (dispatch) => {
  
    dispatch(setCartStatus(status));
  };
  export const setPicture=(picData) =>  (dispatch) => {

    dispatch(setSelectedColorToy(picData));
  };