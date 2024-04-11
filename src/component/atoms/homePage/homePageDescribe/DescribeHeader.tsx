import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function DescribeHeader() {
  return (
    <div>
      <Typography variant="h3">
        <Box sx={{ mt: 2 }}>
          <div>
            Describe benefit of
            <br /> feature one
          </div>
        </Box>
      </Typography>
    </div>
  );
}

export default DescribeHeader;
