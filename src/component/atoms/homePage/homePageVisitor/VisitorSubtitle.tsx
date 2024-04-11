import React from "react";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function VisitorSubtitle() {
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
        <Typography variant="body2">
          <Box sx={{ mt: 3 }}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros <br /> elementum tristique.
            </div>
          </Box>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default VisitorSubtitle;
