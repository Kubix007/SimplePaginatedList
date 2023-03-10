import React, { useEffect, useState } from "react";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import { Paper } from "@mui/material";
import {
  getProducts,
  resetStatus,
} from "../../features/products/productsSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import ModalInfo from "../../components/ModalInfo/ModalInfo";
import FilterInput from "../../components/FilterInput";
import SubmitButton from "../../components/SubmitButton";
import * as Styles from "./Home.styles";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { changeFilterId } from "../../features/filter/filterSlice";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { isError, isSuccess, message } = useSelector(
    (state: RootState) => state.products
  );
  const products = useSelector((state: RootState) => state.products);
  const filterSettings = useSelector((state: RootState) => state.filter);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let params = searchParams;
    let id = params.get("id");
    let page = params.get("page")!;
    dispatch(
      getProducts({
        id: id ? id : "",
        page: page,
        per_page: "5",
      })
    );
    setInputValue(id ? id : "");
    dispatch(changeFilterId(id ? id : ""));
  }, [dispatch, filterSettings, searchParams, setSearchParams]);

  if (isError && !isSuccess && message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
    setInputValue("");
    dispatch(resetStatus());
    setSearchParams({ id: "", page: "1" });
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Styles.AppContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={10}>
        <Styles.PaperLayout>
          <Styles.Center>
            <Styles.FormContainer onSubmit={handleSubmit}>
              <FilterInput
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
              <SubmitButton inputValue={inputValue} />
            </Styles.FormContainer>
            <ProductsTable setOpen={setOpen} data={products.products} />
          </Styles.Center>
        </Styles.PaperLayout>
      </Paper>
      <ModalInfo open={open} setOpen={setOpen} />
    </Styles.AppContainer>
  );
}

export default Home;
