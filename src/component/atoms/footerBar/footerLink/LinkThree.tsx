import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function LinkThree() {
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: 16,
        fontWeight: 500,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ cursor: "pointer" }}>
          <Typography variant="caption">
            <a>Linknk Three</a>
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LinkThree;
