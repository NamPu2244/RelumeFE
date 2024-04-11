import React from "react";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function FooterCookies() {
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
            <u>Cookies Settings</u>
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default FooterCookies;
