import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

function ContentInput() {
  return (
    <div>
      <Box
        sx={{
          width: 357,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Enter your email" id="fullWidth" />
      </Box>
    </div>
  );
}

export default ContentInput;
