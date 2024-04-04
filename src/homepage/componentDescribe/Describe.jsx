import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

function Describe() {
  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      textHead: {
        fontSize: 16,
        fontWeight: "bold",
      },
      subtitle2: {
        fontWeight: "bold",
      },
      textTip: {
        fontSize: 18,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle2">
          <div>Feature one</div>
        </Typography>

        <Typography variant="h3">
          <Box sx={{ mt: 2 }}>
            <div>
              Describe benefit of
              <br /> feature one
            </div>
          </Box>
        </Typography>

        <Typography variant="body1">
          <Box sx={{ mt: 3 }}>
            <div>
              Highlight Unique Selling Proposition (USP) with a short summary of
              the key
              <br /> feature and how it benefits customers.
            </div>
          </Box>
        </Typography>

        <div>
        <Box sx={{ mt: 3 }}>
          <Button variant="outlined" color="inherit">
            Learn more
          </Button>
          </Box>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Describe;
