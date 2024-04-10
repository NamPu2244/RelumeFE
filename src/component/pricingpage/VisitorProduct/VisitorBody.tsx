import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";

function VisitorBody() {
  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      subtitle1: {
        fontSize: 18,
      }
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

export default VisitorBody;
