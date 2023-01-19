import React, { useEffect } from "react";
import ProductsTable from "./components/ProductsTable/ProductsTable";
import { Grid } from "@mui/material";
import { getProducts } from "./features/products/productsSlice";
import { AppDispatch, RootState } from "./app/store";
import { useDispatch, useSelector } from "react-redux";
import ModalInfo from "./components/ModalInfo/ModalInfo";
import Spinner from "./components/Spinner";
import * as Styles from "./App.styles";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { isLoading } = useSelector((state: RootState) => state.products);
  const products = useSelector((state: RootState) => state.products);
  const filterSettings = useSelector((state: RootState) => state.filter);

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
        <ProductsTable setOpen={setOpen} data={products.products} />
      </Grid>
      <ModalInfo open={open} setOpen={setOpen} />
    </Styles.AppContainer>
  );
}

export default App;
