import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import { changeFilterId } from "../../features/filter/filterSlice";
import * as Types from "./SubmitButton.types";

const SubmitButton = ({ inputValue }: Types.ButtonProps) => {
  const [, setSearchParams] = useSearchParams();
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    if (inputValue) {
      setSearchParams({ id: inputValue });
    } else if (inputValue === "") {
      setSearchParams({});
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
