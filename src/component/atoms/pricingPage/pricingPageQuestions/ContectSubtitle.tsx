import React from "react";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

function ContectSubtitle() {
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1">
              Support details to capture customers that might be on the fence.
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ContectSubtitle;
