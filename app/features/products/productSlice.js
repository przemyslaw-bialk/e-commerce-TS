import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.allProducts.find(
        (item) => item._id === action.payload._id,
      );
      if (existingProduct) {
        existingProduct.qtn = existingProduct.qtn + action.payload.qtn;
      } else {
        state.allProducts.push({
          ...action.payload,
          qtn: action.payload.qtn,
        });
      }
    },
    clearCart: (state) => {
      state.allProducts = [];
    },
    removeItemFromCart: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (item) => item._id !== action.payload,
      );
    },
  },
});

export const { addProduct, clearCart, removeItemFromCart } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
