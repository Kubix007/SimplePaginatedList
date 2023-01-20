import styled from "styled-components";
import { TableContainer, TablePagination, TableRow } from "@mui/material";
import * as Types from "./ProductsTable.types";

export const RowTable = styled(TableRow)<Types.RowProps>`
  &.MuiTableRow-root {
    background-color: ${(props) => props.bgcolor};
  }
`;

export const ContainerTable = styled(TableContainer)<Types.TableContainerProps>`
  &.MuiTableContainer-root {
    border: 1px solid black;
  }
  &.MuiTablePagination-displayedRows {
    display: none;
  }
`;

export const Pagination = styled(TablePagination)<Types.TableContainerProps>`
  & .MuiTablePagination-displayedRows {
    display: none;
  }
`;
