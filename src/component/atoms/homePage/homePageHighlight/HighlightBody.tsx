import React from "react";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function HighlightBody(props) {

  const {high} = props;
  return (
    <div>
      <Typography variant="body2">
        <div>
          {high}
        </div>
      </Typography>
    </div>
  );
}

export default HighlightBody;
