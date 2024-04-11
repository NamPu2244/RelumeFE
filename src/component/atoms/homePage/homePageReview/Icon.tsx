import React from "react";
import webflow from "/Img/Highlight/Black.svg";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function Icon() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={webflow} />
      </Box>
    </div>
  );
}

export default Icon;
