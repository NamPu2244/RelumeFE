import React from "react";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function FooterCredit() {
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
            <div>© 2023 Relume. All rights reserved.</div>
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default FooterCredit;
