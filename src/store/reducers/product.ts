import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../../common/ApiHelper";
import * as actionTypes from "../actionTypes/product";

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  categories: [],
  selectedCategories: [],
  isLoading: false,
  hasError: false,
};

export const fetchProducts = createAsyncThunk(
  actionTypes.GET_PRODUCTS,
  getProducts
);

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<{ category: string }>) => {
      const category = action.payload.category;
      if (state.selectedCategories.includes(category)) {
        const index = state.selectedCategories.indexOf(category);
        if (index !== -1) {
          state.selectedCategories.splice(index, 1);
        }
      } else {
        state.selectedCategories.push(category);
      }
      if (state.selectedCategories.length === 0) {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((p) =>
          state.selectedCategories.includes(p.category)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const products = action.payload as IProduct[];
      const categories = products.map((e) => e.category);
      const uniqueCategories = Array.from(new Set(categories));
      state.products = products;
      state.filteredProducts = products;
      state.categories = uniqueCategories;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});
export default productsSlice.reducer;
export const { toggleCategory } = productsSlice.actions;
