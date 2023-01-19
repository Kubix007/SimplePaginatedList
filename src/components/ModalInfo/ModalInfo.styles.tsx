import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const PropertyName = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
  }
`;

export const PropertyValue = styled(Typography)`
  &.MuiTypography-root {
    font-weight: normal;
  }
`;

export const ModalContent = styled(Box)`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 2px solid #888;
  width: 20%;
`;
