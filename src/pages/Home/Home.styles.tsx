import { Box, Grid, Stack } from "@mui/material";
import styled from "styled-components";

export const AppContainer = styled(Grid)`
  &.MuiGrid-root {
    height: 100vh;
    background-color: #fefae0;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Center = styled(Stack)`
  align-items: center;
`;

export const PaperLayout = styled(Box)`
  min-height: 400px;
  padding: 25px;
  padding-bottom: 10px;
`;
