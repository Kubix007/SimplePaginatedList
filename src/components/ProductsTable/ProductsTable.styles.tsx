import styled from "styled-components";
import {
  Table,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import * as Types from "./ProductsTable.types";

export const RowTable = styled(TableRow)<Types.RowProps>`
  &.MuiTableRow-root {
    background-color: ${(props) => props.bgcolor};
  }
`;

export const ContainerTable = styled(TableContainer)<Types.TableContainerProps>`
  &.MuiTableContainer-root {
    border: 1px solid black;
    height: 321.4px;
  }
`;

export const Pagination = styled(TablePagination)<Types.TableContainerProps>`
  & .MuiTablePagination-displayedRows {
    display: none;
  }
`;

export const MaterialTable = styled(Table)`
  &.MuiTable-root {
    width: 650px;
    @media screen and (max-width: 700px) {
      width: 550px;
    }
    @media screen and (max-width: 575px) {
      width: 450px;
    }
    @media screen and (max-width: 470px) {
      width: 350px;
    }
    @media screen and (max-width: 370px) {
      width: 280px;
    }
  }
`;
