import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function CustomerImg(props) {
  const {pricingHighlight} = props
  const theme = createTheme({
    typography: {
      h6: {
        fontSize: 20,
        fontWeight: "bold",
      },
      body2: {
        fontSize: 16,
        fontWeight: "bold",
      },
      caption: {
        fontSize: 16,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mb: 4 }}>
            <img src={pricingHighlight} alt="" />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default CustomerImg;
