import React from "react";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";

function VisitorButton() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" color="primary">
            Get start
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default VisitorButton;
