import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function DescribeCaption() {
  const theme = createTheme({
    typography: {
      subtitle2: {
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle2">
          <div>Feature one</div>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default DescribeCaption;
