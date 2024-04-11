import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

function TextSubTitle() {
  return (
    <div>
      <Typography variant="subtitle1">
        <p>
          Describe exactly what your product or service does to solve this
          problem. <br />
          Avoid using verbose words or phrases.
        </p>
      </Typography>
    </div>
  );
}

export default TextSubTitle;
