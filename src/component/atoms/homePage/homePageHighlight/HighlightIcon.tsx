import React from "react";
import highlight from "/Img/Highlight/Vector.svg";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function HighlightIcon(props) {

  const {high} = props
  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <img src={highlight} />
      </Box>
    </div>
  );
}

export default HighlightIcon;
