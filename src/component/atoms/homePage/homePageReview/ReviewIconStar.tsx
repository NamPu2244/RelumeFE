import React from "react";
import star from "/Img/Highlight/Stars.svg";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function ReviewIconStar() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={star} />
      </Box>
    </div>
  );
}

export default ReviewIconStar;
