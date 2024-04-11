import React from "react";
import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";

function NavButton() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          <Typography variant="caption" color="white">
            Try for free
          </Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default NavButton;
