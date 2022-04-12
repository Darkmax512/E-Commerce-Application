import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const intialVlaue = {
  cartItems: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialVlaue,
  reducers: {
    setCart(state, action) {
      state.cartItems = action.payload;
      state.cartCount = state.cartItems.reduce((a, b) => a + b.quantity, 0);
    },
    setQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      console.log(itemIndex);
      if (itemIndex === -1) {
        const newProduct = { ...action.payload.product };
        newProduct.quantity = 1;
        state.cartItems.unshift(newProduct);
      } else {
        if (action.payload.quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          state.cartItems[itemIndex].quantity = action.payload.quantity;
        }
      }
      state.cartCount = state.cartItems.reduce((a, b) => a + b.quantity, 0);
    },
    delProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      state.cartItems.splice(itemIndex, 1);
    },
  },
});
export const cartActions = cartSlice.actions;

export const updateUserCart = (product, quantity) => {
  return async (dispatch, getState) => {
    dispatch(cartActions.setQuantity({ product, quantity }));
    const cart = getState().cart.cartItems;
    console.log(cart);
    axios.put(
      "http://localhost:5000/api/v1/auth/updateCart",
      { cart },
      {
        withCredentials: true,
      }
    );
  };
};

export default cartSlice.reducer;
