import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function LinkFour() {
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
            <a>Linknk Four</a>
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LinkFour;
