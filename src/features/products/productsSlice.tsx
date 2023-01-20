import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFilterState, IProductState } from "../../shared/types";
import productsService from "./productsService";

const initialState: IProductState = {
  products: {
    page: 1,
    per_page: 5,
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
    resetStatus: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset, resetStatus } = productsSlice.actions;
export default productsSlice.reducer;
