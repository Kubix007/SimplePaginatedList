import React, { useEffect, useState } from "react";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import { Grid } from "@mui/material";
import { getProducts } from "../../features/products/productsSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import ModalInfo from "../../components/ModalInfo/ModalInfo";
import Spinner from "../../components/Spinner";
import FilterInput from "../../components/FilterInput";
import SubmitButton from "../../components/SubmitButton";
import * as Styles from "./Home.styles";
import { useSearchParams } from "react-router-dom";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { isLoading } = useSelector((state: RootState) => state.products);
  const products = useSelector((state: RootState) => state.products);
  const filterSettings = useSelector((state: RootState) => state.filter);
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get("id"));

  useEffect(() => {
    let params = searchParams;
    let id = params.get("id")!;
    let page = params.get("page")!;
    dispatch(
      getProducts({
        id: id ? id : "",
        page: page,
        per_page: "5",
      })
    );
  }, [dispatch, filterSettings, searchParams, setSearchParams]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Styles.AppContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <FilterInput setInputValue={setInputValue} inputValue={inputValue} />
        <SubmitButton inputValue={inputValue} />
      </Grid>
      <Grid item>
        <ProductsTable setOpen={setOpen} data={products.products} />
      </Grid>
      <ModalInfo open={open} setOpen={setOpen} />
    </Styles.AppContainer>
  );
}

export default Home;
