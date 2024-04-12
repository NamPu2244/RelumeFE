import React from "react";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function ButtonSend() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
  });
  return (

      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Try for free
        </Button>
      </ThemeProvider>

  );
}

export default ButtonSend;
