import React from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

function VisitorSubtitle() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      subtitle1: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default VisitorSubtitle;
