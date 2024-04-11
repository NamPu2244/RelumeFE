import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import webflow from "/Img/Highlight/Black.svg";
import relume from "/Img/Highlight/Relume.svg";

function Icon() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
          my: 2,
        }}
      >
        <img src={webflow} />
        <img src={relume} />
        <img src={webflow} />
        <img src={relume} />
        <img src={webflow} />
        <img src={relume} />
      </Box>
    </div>
  );
}

export default Icon;
