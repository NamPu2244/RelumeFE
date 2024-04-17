import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Typography, Box, createTheme } from "@mui/material";

function ContentSubtitle() {
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <div>
        <ThemeProvider theme={theme}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </Typography>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ContentSubtitle;
