import { Box, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as Types from "./ModalInfo.types";
import * as Styles from "./ModalInfo.styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalInfo = ({ open, setOpen }: Types.IModalProps) => {
  const selectedProduct = useSelector(
    (state: RootState) => state.selectedProduct
  );

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Styles.ModalContent>
        <Styles.PropertyName>
          ID:<Styles.PropertyValue>{selectedProduct.id}</Styles.PropertyValue>
        </Styles.PropertyName>
        <Styles.PropertyName>
          Name:
          <Styles.PropertyValue>{selectedProduct.name}</Styles.PropertyValue>
        </Styles.PropertyName>
        <Styles.PropertyName>
          Color:
          <Styles.PropertyValue>{selectedProduct.color}</Styles.PropertyValue>
        </Styles.PropertyName>
        <Styles.PropertyName>
          Pantone Value:
          <Styles.PropertyValue>
            {selectedProduct.pantone_value}
          </Styles.PropertyValue>
        </Styles.PropertyName>
        <Styles.PropertyName>
          Year:
          <Styles.PropertyValue>{selectedProduct.year}</Styles.PropertyValue>
        </Styles.PropertyName>
      </Styles.ModalContent>
    </Modal>
  );
};

export default ModalInfo;
