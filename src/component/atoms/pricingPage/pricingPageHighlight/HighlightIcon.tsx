import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function HighlightIcon(props) {
  const {pricingHighlight} = props
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ mb: 6 }}>
          <img src={pricingHighlight} alt="" />
        </Box>
      </Box>
    </div>
  );
}

export default HighlightIcon;
