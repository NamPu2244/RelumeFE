import React from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

function VisitorHeader() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      h2: {
        fontSize: 48,
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2">
            Call to action that excites the visitor to try your product
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default VisitorHeader;
