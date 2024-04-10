import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";

function HeadQuestion() {
  const theme = createTheme({
    typography: {
      h2: {
        fontSize: 48,
        fontWeight:'bold'
      },
      subtitle1: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h2">Frequently asked questions</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default HeadQuestion;
