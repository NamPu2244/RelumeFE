import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function FrequentlyHeader() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      h4: {
        fontSize: 48,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h4">
          <div>Frequently asked questions</div>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default FrequentlyHeader;
