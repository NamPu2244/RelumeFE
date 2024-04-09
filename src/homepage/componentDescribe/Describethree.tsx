import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

function Describethree() {
  const theme = createTheme({
    typography: {
      subtitle2: {
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <Typography variant="subtitle2">
            <div>Feature three</div>
          </Typography>

          <Typography variant="h3">
            <Box sx={{ mt: 2 }}>
              <div>
                Describe benefit of
                <br /> feature three
              </div>
            </Box>
          </Typography>

          <Typography variant="body1">
            <Box sx={{ mt: 3 }}>
              <div>
                Highlight Unique Selling Proposition (USP) with a short summary
                of the key
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
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Describethree;
