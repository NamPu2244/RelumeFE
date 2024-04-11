import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function ShortHeader() {
  return (
    <div>
      <Typography variant="h3">
        <Box sx={{ mt: 2 }}>
          <div>
            Headline with USP related to how your product or service works
          </div>
        </Box>
      </Typography>
    </div>
  );
}

export default ShortHeader;
