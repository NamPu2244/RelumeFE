import React from "react";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function FooterPrivacy() {
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: 14,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ cursor: "pointer" }}>
          <Typography variant="caption">
            <u>Privacy Policy</u>
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default FooterPrivacy;
