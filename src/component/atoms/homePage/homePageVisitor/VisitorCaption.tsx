import React from "react";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function VisitorCaption() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      h3: {
        fontSize: 48,
        fontWeight: "bold",
      },
      body2: {
        fontSize: 18,
      },
      caption: {
        fontSize: 12,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="caption">
          <Box sx={{ mt: 2 }}>
            <div>
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </div>
          </Box>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default VisitorCaption;
