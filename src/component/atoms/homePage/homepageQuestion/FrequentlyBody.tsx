import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function FrequentlyBody() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      h4: {
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
        <Typography variant="subtitle1">
          <Box sx={{ mt: 3 }}>
            <div>
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </div>
          </Box>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default FrequentlyBody;
