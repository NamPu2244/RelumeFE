import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import webflow from "/Img/Highlight/Black.svg";
import relume from "/Img/Highlight/Relume.svg";

function Social() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {

      subtitle2: {
        fontSize: 16,
      }
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Typography variant="subtitle2">
              <Box sx={{ textAlign: "center", mt: 6 }}>
                <div>
                  Trusted by the world's best companies [social proof to build
                  credibility]
                </div>
              </Box>
            </Typography>

            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 15,
                  my: 2,
                }}
              >
                <img src={webflow} />
                <img src={relume} />
                <img src={webflow} />
                <img src={relume} />
                <img src={webflow} />
                <img src={relume} />
              </Box>
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Social;
