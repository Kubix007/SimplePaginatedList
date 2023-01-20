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

  @media screen and (max-width: 1850px) {
    width: 30%;
    margin: 15% auto;
  }

  @media screen and (max-width: 1600px) {
    width: 20%;
    margin: 20% auto;
  }

  @media screen and (max-width: 1310px) {
    width: 30%;
    margin: 30% auto;
  }

  @media screen and (max-width: 900px) {
    width: 50%;
    margin: 40% auto;
  }

  @media screen and (max-width: 525px) {
    width: 50%;
    margin: 70% auto;
  }
  @media screen and (max-width: 400px) {
    width: 50%;
    margin: 90% auto;
  }
`;
