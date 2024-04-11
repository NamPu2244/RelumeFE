import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function LinkTwo() {
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
            <a>Linknk Two</a>
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LinkTwo;
