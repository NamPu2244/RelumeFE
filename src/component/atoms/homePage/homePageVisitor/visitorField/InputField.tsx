import React from "react";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function InputField() {
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

export default InputField;
