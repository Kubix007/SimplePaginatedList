import { TextField } from "@mui/material";
import * as Types from "./FilterInput.types";

const FilterInput = ({ inputValue, setInputValue }: Types.InputProps) => {
  return (
    <TextField
      label="Search by ID"
      type="number"
      fullWidth
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default FilterInput;
