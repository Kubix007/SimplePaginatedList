import styled from "styled-components";
import { TableRow } from "@mui/material";
import { RowProps } from "./ProductsTable.types";

export const RowTable = styled(TableRow)<RowProps>`
  &.MuiTableRow-root {
    background-color: ${(props) => props.bgColor};
  }
`;
