import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

function ContectUs() {
  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      h4: {
        fontSize: 32,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 18,
      }
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4">Still have questions?</Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1">
              Support details to capture customers that might be on the fence.
            </Typography>
          </Box>

          <Box>
            <Button variant="outlined" color="black">Contect us</Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ContectUs;
