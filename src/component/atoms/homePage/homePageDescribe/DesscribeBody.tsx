import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function DesscribeBody() {
  return (
    <div>
      <Typography variant="body1">
        <Box sx={{ mt: 3 }}>
          <div>
            Highlight Unique Selling Proposition (USP) with a short summary of
            the key
            <br /> feature and how it benefits customers.
          </div>
        </Box>
      </Typography>
    </div>
  );
}

export default DesscribeBody;
