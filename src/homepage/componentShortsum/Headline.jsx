import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

function Headline() {
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
      textCon: {
        fontSize: 48,
        fontWeight: "bold",
      },
      textTip: {
        fontSize: 12,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h6">
          <div>How it works</div>
        </Typography>

        <Typography variant="h3">
          <Box sx={{ mt: 2 }}>
            <div>
              Headline with USP related to how your product or service works
            </div>
          </Box>
        </Typography>

        <div>
          <Box sx={{ mt: 4 }}>
            <Button variant="outlined" color="inherit">
              Learn more
            </Button>
          </Box>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Headline;
