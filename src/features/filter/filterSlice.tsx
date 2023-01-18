import { createSlice } from "@reduxjs/toolkit";
import { IFilterState } from "../../shared/types";

const initialState: IFilterState = {
  id: "",
  page: "",
  per_page: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = filterSlice.actions;
export default filterSlice.reducer;
