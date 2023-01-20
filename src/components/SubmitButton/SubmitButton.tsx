import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { changeFilterId } from "../../features/filter/filterSlice";
import * as Types from "./SubmitButton.types";

const SubmitButton = ({ inputValue }: Types.ButtonProps) => {
  const [, setSearchParams] = useSearchParams();
  const dispatch: AppDispatch = useDispatch();
  const filterSettings = useSelector((state: RootState) => state.filter);

  const handleClick = () => {
    if (inputValue) {
      setSearchParams({ page: filterSettings.page, id: inputValue });
    } else if (inputValue === "") {
      setSearchParams({ page: filterSettings.page });
    }
    dispatch(changeFilterId(inputValue));
  };

  return (
    <Button variant="contained" onClick={handleClick} fullWidth>
      Submit
    </Button>
  );
};

export default SubmitButton;
