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
import * as Types from "./ProductsTable.types";
import * as Styles from "./ProductsTable.styles";

const ProductsTable = ({ data, setOpen }: Types.Props) => {
  const handleClick = () => {
    setOpen(true);
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
          {data.data.map((row: IProduct) => (
            <Styles.RowTable
              onClick={handleClick}
              bgcolor={row.color}
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </Styles.RowTable>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
