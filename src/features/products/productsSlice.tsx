import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFilterState, IProductState } from "../../shared/types";
import productsService from "./productsService";

const initialState: IProductState = {
  page: 0,
  per_page: 0,
  total: 0,
  total_pages: 0,
  data: [],
};

//Get products
export const getUsers = createAsyncThunk(
  "/products",
  async (filterSettings: IFilterState, thunkAPI) => {
    try {
      return await productsService.getProducts(
        filterSettings.page,
        filterSettings.per_page,
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

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
