import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Typography, Box, createTheme } from "@mui/material";

function ContentCaption() {
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <div>
        <ThemeProvider theme={theme}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="caption">Pricing plans</Typography>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ContentCaption;
