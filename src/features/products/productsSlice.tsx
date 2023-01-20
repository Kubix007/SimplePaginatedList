import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFilterState, IProductState } from "../../shared/types";
import productsService from "./productsService";

const initialState: IProductState = {
  products: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get products
export const getProducts = createAsyncThunk(
  "/products",
  async (filterSettings: IFilterState, thunkAPI) => {
    try {
      return await productsService.getProducts(
        filterSettings.page,
        filterSettings.id
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;
