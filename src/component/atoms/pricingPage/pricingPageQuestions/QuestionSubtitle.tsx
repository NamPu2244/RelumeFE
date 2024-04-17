import React from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

function QuestionSubtitle() {
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box>
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

export default QuestionSubtitle;
