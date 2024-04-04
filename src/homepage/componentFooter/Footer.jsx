import React from "react";
import Logo from "./Logo";
import Linkf from "./Linkf";
import Social from "./Social";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function Footer() {
  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      textLink: {
        fontSize: 16,
        fontWeight: 500,
      },
      caption: {
        fontSize: 14,
      },
      textTip: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 5,
              my: 14,
            }}
          >
            <Logo />
            <Linkf />
            <Social />
          </Box>
        </div>

        <div>
          <div>
            <Box
              sx={{
                borderTop: 1,
                boxSizing: "border-box",
                mt: 10,
              }}
            ></Box>

            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 5,
                  mt: 4,
                }}
              >
                <Typography variant="caption">
                  <div>© 2023 Relume. All rights reserved.</div>
                </Typography>

                <Typography variant="caption">
                  <u>Privacy Policy</u>
                </Typography>

                <Typography variant="caption">
                  <u>Terms of Service</u>
                </Typography>

                <Typography variant="caption">
                  <u>Cookies Settings</u>
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Footer;
