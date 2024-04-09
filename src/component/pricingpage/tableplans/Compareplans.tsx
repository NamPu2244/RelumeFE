import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

function Compareplans() {
  const theme = createTheme({
    typography: {
      h2: {
        fontSize: 48,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 18,
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{mb:6}}>
            <Typography variant="h2">Compare plans</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Compareplans;
