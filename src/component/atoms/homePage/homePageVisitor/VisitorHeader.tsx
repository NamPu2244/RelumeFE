import React from "react";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function VisitorHeader() {
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
        <Typography variant="h3">
          <div>
            Call to action that invites visitor to <br /> try the product for
            free
          </div>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default VisitorHeader;
