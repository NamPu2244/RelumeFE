import React from "react";
import highlight from "/Img/Highlight/Vector.svg";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function HightHeader() {
  const theme = createTheme({
    typography: {
      h5: {
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">
          <Box sx={{ mb: 3 }}>
            <div>Highlight benefit one</div>
          </Box>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default HightHeader;
