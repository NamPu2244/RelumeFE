import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

function Linkf() {
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: 16,
        fontWeight: 500,
      }
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", gap: 5 }}>
          <Typography variant="caption">
            <a>Linknk One</a>
          </Typography>
          <Typography variant="caption">
            <a>Linknk Two</a>
          </Typography>
          <Typography variant="caption">
            <a>Linknk Three</a>
          </Typography>
          <Typography variant="caption">
            <a>Linknk Four</a>
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Linkf;
