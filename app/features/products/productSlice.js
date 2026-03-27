import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
