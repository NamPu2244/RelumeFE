import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import LinkOne from "../../atoms/footerBar/footerLink/LinkOne";
import LinkTwo from "../../atoms/footerBar/footerLink/LinkTwo";
import LinkFour from "../../atoms/footerBar/footerLink/LinkFour";
import LinkThree from "../../atoms/footerBar/footerLink/LinkThree";

function FooterLink() {
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: 16,
        fontWeight: 500,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", gap: 5 }}>
          <LinkOne />
          <LinkTwo />
          <LinkThree />
          <LinkFour />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default FooterLink;
