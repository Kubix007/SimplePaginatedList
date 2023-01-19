import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import productsReducer from "../features/products/productsSlice";
import selectedProductReducer from "../features/selectedProduct/selectedProductSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
