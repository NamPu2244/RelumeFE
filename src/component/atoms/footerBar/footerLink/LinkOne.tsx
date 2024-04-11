import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function LinkOne() {
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
      <Box sx={{ cursor: "pointer" }}>
        <Typography variant="caption">
          <a>Linknk One</a>
        </Typography>
      </Box>
    </div>
  );
}

export default LinkOne;
