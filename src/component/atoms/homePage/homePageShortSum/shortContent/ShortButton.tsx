import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function ShortButton() {
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
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" color="inherit">
            Learn more
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ShortButton;
