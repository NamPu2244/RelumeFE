import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function FrequentlyButton() {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Button variant="outlined" color="inherit">
          Contact us
        </Button>
      </Box>
    </div>
  );
}

export default FrequentlyButton;
