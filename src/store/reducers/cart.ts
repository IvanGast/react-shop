import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findProductIndex } from "../../common/hooks";

const initialState: CartState = {
  products: [],
  productCounts: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: IProduct }>) => {
      const product = action.payload.product;
      if (state.products.map((e) => e.title).includes(product.title)) {
        const index = findProductIndex(product, state.products);
        if (index !== -1) {
          state.productCounts[index] = state.productCounts[index] + 1;
        }
      } else {
        state.products.push(product);
        state.productCounts.push(1);
      }
      state.totalCount++;
      state.totalPrice += product.price;
    },
    deleteFromCart: (state, action: PayloadAction<{ product: IProduct }>) => {
      const product = action.payload.product;
      const index = findProductIndex(product, state.products);
      if (index !== -1) {
        state.totalCount -= state.productCounts[index];
        state.totalPrice -= product.price * state.productCounts[index];
        state.products.splice(index, 1);
        state.productCounts.splice(index, 1);
      }
      if (state.totalCount === 0) {
        state.totalPrice = 0;
      }
    },
    incrementProductCount: (
      state,
      action: PayloadAction<{ product: IProduct }>
    ) => {
      const product = action.payload.product;
      const index = findProductIndex(product, state.products);
      if (index !== -1) {
        state.productCounts[index] = state.productCounts[index] + 1;
      }
      state.totalPrice += product.price;
      state.totalCount++;
    },
    decrementProductCount: (
      state,
      action: PayloadAction<{ product: IProduct }>
    ) => {
      const product = action.payload.product;
      const index = findProductIndex(product, state.products);
      if (index !== -1) {
        state.productCounts[index] = state.productCounts[index] - 1;
        if (state.productCounts[index] === 0) {
          state.products.splice(index, 1);
          state.productCounts.splice(index, 1);
        }
      }
      state.totalPrice -= product.price;
      state.totalCount--;
      if (state.totalCount === 0) {
        state.totalPrice = 0;
      }
    },
  },
});
export default cartSlice.reducer;
export const {
  addToCart,
  deleteFromCart,
  incrementProductCount,
  decrementProductCount,
} = cartSlice.actions;
