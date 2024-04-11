import {
  Box,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import Navbutton from "../componentNav/Navbutton";

function Content() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {

    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
          Resonate with the <br /> visitor's problem
        </Typography>

        <Typography variant="subtitle1">
          <p>
            Describe exactly what your product or service does to solve this
            problem. <br/>Avoid using verbose words or phrases.
          </p>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
          <Box
            sx={{
              width: 357,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Enter your email" id="fullWidth" />
          </Box>

          <Button variant="contained" color="primary">
            Try for free
          </Button>
        </Box>

        <Typography variant="caption">
          <p>
            By clicking Sign Up you're confirming that you agree with our{" "}
            <Box sx={{cursor:'pointer'}}><u>Terms and Conditions</u>.</Box>
            
          </p>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Content;
