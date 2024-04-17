import React from "react";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

function ContectHeader() {
  const theme = createTheme({
    typography: {
      h4: {
        fontSize: 32,
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4">Still have questions?</Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ContectHeader;
