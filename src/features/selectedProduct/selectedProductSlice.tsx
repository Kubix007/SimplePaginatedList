import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../shared/types";

const initialState: IProduct = {
  id: "",
  name: "",
  year: 0,
  color: "",
  pantone_value: "",
};

export const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setSelectProduct: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.year = action.payload.year;
      state.color = action.payload.color;
      state.pantone_value = action.payload.pantone_value;
    },
  },
});

export const { reset, setSelectProduct } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
