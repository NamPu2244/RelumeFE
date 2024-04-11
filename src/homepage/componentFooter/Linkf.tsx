import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

function Linkf() {
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
        <Box sx={{ display: "flex", gap: 5 }}>
          <Box sx={{cursor:'pointer'}}>
            <Typography variant="caption">
              <a>Linknk One</a>
            </Typography>
          </Box>
          <Box sx={{cursor:'pointer'}}>
            <Typography variant="caption">
              <a>Linknk Two</a>
            </Typography>
          </Box>
          <Box sx={{cursor:'pointer'}}>
            <Typography variant="caption">
              <a>Linknk Three</a>
            </Typography>
          </Box>
          <Box sx={{cursor:'pointer'}}>
            <Typography variant="caption">
              <a>Linknk Four</a>
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Linkf;
