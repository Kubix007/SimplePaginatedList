import { createSlice } from "@reduxjs/toolkit";
import { IFilterState } from "../../shared/types";

const initialState: IFilterState = {
  id: "",
  page: "1",
  per_page: "5",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: (state) => initialState,
    changeFilterId: (state, action) => {
      state.id = action.payload;
    },
    changeFilterPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { reset, changeFilterId, changeFilterPage } = filterSlice.actions;
export default filterSlice.reducer;
