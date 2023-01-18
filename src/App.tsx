import React from "react";
import ProductsTable from "./components/ProductsTable/ProductsTable";
import * as Styles from "./App.styles";
import { Grid } from "@mui/material";

function App() {
  return (
    <Styles.AppContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <ProductsTable />
      </Grid>
      <Grid item>
        <ProductsTable />
      </Grid>
    </Styles.AppContainer>
  );
}

export default App;
