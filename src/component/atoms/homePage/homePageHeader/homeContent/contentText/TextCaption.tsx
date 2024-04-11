import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

function TextCaption() {
  return (
    <div>
      <Typography variant="caption">
        <p>
          By clicking Sign Up you're confirming that you agree with our
        </p>
      </Typography>
    </div>
  );
}

export default TextCaption;
