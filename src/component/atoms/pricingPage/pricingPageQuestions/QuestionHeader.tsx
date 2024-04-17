import React from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

function QuestionHeader() {
  const theme = createTheme({
    typography: {
      h2: {
        fontSize: 48,
        fontWeight: "bold",
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
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default QuestionHeader;
