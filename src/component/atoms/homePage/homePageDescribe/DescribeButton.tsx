import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function DescribeButton() {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Button variant="outlined" color="inherit">
          Learn more
        </Button>
      </Box>
    </div>
  );
}

export default DescribeButton;
