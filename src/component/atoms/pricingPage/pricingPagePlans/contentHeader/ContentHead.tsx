import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Typography, Box, createTheme } from "@mui/material";

function ContentHead() {
  const theme = createTheme({
    typography: {
      h3: {
        fontSize: 56,
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <div>
        <ThemeProvider theme={theme}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3">Introduce pricing plans</Typography>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ContentHead;
