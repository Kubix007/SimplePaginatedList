import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import { IProduct } from "../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { setSelectProduct } from "../../features/selectedProduct/selectedProductSlice";
import * as Types from "./ProductsTable.types";
import * as Styles from "./ProductsTable.styles";
import { useState } from "react";
import { changeFilterPage } from "../../features/filter/filterSlice";
import { useSearchParams } from "react-router-dom";

const ProductsTable = ({ data, setOpen }: Types.Props) => {
  const [, setPage] = useState(0);
  const [, setSearchParams] = useSearchParams();
  const filterSettings = useSelector((state: RootState) => state.filter);

  const dispatch: AppDispatch = useDispatch();
  const handleClick = (row: IProduct) => {
    setOpen(true);
    dispatch(setSelectProduct(row));
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    let validPage = newPage + 1;
    setPage(newPage);
    dispatch(changeFilterPage(`${Number.isNaN(validPage) ? 1 : validPage}`));
    setSearchParams({
      id: filterSettings.id,
      page: `${Number.isNaN(validPage) ? 1 : validPage}`,
    });
  };
  return (
    <>
      <Styles.ContainerTable component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.length > 1 ? (
              data.data.map((row: IProduct) => (
                <Styles.RowTable
                  onClick={() => handleClick(row)}
                  bgcolor={row.color}
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                </Styles.RowTable>
              ))
            ) : (
              <Styles.RowTable
                onClick={() => handleClick(data.data)}
                bgcolor={data.data.color}
                key={data.data.id}
              >
                <TableCell component="th" scope="row">
                  {data.data.id}
                </TableCell>
                <TableCell align="right">{data.data.name}</TableCell>
                <TableCell align="right">{data.data.year}</TableCell>
              </Styles.RowTable>
            )}
          </TableBody>
        </Table>
      </Styles.ContainerTable>
      <Styles.Pagination
        rowsPerPageOptions={[-1]}
        component="div"
        count={data.total === undefined ? 0 : data.total}
        rowsPerPage={5}
        page={Number.isNaN(data.page - 1) ? 0 : data.page - 1}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default ProductsTable;
