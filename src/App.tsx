import React, { useEffect } from "react";
import ProductsTable from "./components/ProductsTable/ProductsTable";
import * as Styles from "./App.styles";
import { Grid } from "@mui/material";
import Spinner from "./components/Spinner";
import { getProducts } from "./features/products/productsSlice";
import { AppDispatch, RootState } from "./app/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const filterSettings = useSelector((state: RootState) => state.filter);
  const { isLoading } = useSelector((state: RootState) => state.products);
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts(filterSettings));
  }, [dispatch, filterSettings]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Styles.AppContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <ProductsTable data={products.products} />
      </Grid>
    </Styles.AppContainer>
  );
}

export default App;
