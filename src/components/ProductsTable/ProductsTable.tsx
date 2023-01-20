import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import { IProduct } from "../../shared/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setSelectProduct } from "../../features/selectedProduct/selectedProductSlice";
import * as Types from "./ProductsTable.types";
import * as Styles from "./ProductsTable.styles";

const ProductsTable = ({ data, setOpen }: Types.Props) => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = (row: IProduct) => {
    setOpen(true);
    dispatch(setSelectProduct(row));
  };
  return (
    <TableContainer component={Paper}>
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
    </TableContainer>
  );
};

export default ProductsTable;
