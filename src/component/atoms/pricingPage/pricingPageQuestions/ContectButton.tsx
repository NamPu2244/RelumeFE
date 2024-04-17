import React from "react";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

function ContectButton() {
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
          <Box>
            <Button variant="outlined" color="primary">
              Contect us
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ContectButton;
