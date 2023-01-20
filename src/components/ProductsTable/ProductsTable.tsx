import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  TablePagination,
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
    setPage(newPage);
    dispatch(changeFilterPage(`${newPage + 1}`));
    setSearchParams({ id: filterSettings.id, page: `${newPage + 1}` });
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
      <TablePagination
        rowsPerPageOptions={[-1]}
        component="div"
        count={data.total}
        rowsPerPage={5}
        page={data.page - 1}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default ProductsTable;
