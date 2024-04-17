import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function CustomerPosition(props) {
  const {pricingHighlight} = props
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: 16,
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Typography variant="caption">{pricingHighlight}</Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default CustomerPosition;
