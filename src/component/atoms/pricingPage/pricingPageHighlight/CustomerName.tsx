import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function CustomerName(props) {
  const {pricingHighlight} = props
  const theme = createTheme({
    typography: {
      body2: {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Typography variant="body2">{pricingHighlight}</Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default CustomerName;
