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
    typography: {
      caption: {
        fontSize: 14,
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
                <Box sx={{ cursor: "pointer" }}>
                  <Typography variant="caption">
                    <div>© 2023 Relume. All rights reserved.</div>
                  </Typography>
                </Box>

                <Box sx={{ cursor: "pointer" }}>
                  <Typography variant="caption">
                    <u>Privacy Policy</u>
                  </Typography>
                </Box>

                <Box sx={{ cursor: "pointer" }}>
                  <Typography variant="caption">
                    <u>Terms of Service</u>
                  </Typography>
                </Box>

                <Box sx={{ cursor: "pointer" }}>
                  <Typography variant="caption">
                    <u>Cookies Settings</u>
                  </Typography>
                </Box>
              </Box>
            </div>


          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Footer;
