import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item?.id !== action.payload.id)
    },
    
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    }
  }
})

export const {
  removeFromCart,
  addToCart
} = cartSlice.actions;

export default cartSlice.reducer