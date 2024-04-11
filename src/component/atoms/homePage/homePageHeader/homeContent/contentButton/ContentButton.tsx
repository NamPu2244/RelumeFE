import {
  Box,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";

function ContentButton() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {},
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Try for free
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default ContentButton;
