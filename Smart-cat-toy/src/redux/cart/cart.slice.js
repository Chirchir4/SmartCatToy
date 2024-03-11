import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartStatus:false,
  selectedColorToy:[],
  selectedState:   "",
  stateModalOpen:false
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      
      state.cartItems = action.payload;
    },
    setCartStatus: (state, action) => {
  
      state.cartStatus = action.payload;
    },
    setSelectedColorToy:(state,action)=>{
        state.selectedColorToy =action.payload
    },
    setSelectedState:(state,action)=>{
      state.selectedState =action.payload
  },
  setStateModalOpen:(state,action) =>{
    state.stateModalOpen=action.payload
  }
  
  },
});
export const { setCartItems,setCartStatus,setSelectedColorToy,setSelectedState,setStateModalOpen} = cartSlice.actions;

export default cartSlice.reducer;
