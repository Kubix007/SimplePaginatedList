import styled from "styled-components";
import { TableRow } from "@mui/material";
import * as Types from "./ProductsTable.types";

export const RowTable = styled(TableRow)<Types.RowProps>`
  &.MuiTableRow-root {
    background-color: ${(props) => props.bgcolor};
  }
`;
