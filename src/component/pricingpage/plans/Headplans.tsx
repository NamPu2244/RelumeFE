import { ThemeProvider } from "@emotion/react";
import { Typography, Box, createMuiTheme, createTheme } from "@mui/material";
import React from "react";

function Headplans() {
  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      caption: {
        fontSize: 16,
        fontWeight: "bold",
      },
      h3: {
        fontSize: 56,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <div>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="caption">Pricing plans</Typography>
            </Box>

            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h3">Introduce pricing plans</Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1">
                Simple, transparent pricing that grows with you. Try any plan
                free for 30 days.
              </Typography>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Headplans;
