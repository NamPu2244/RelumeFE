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
      black: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      textHead: {
        fontSize: 56,
        fontWeight: "bold",
      },
      textCon: {
        fontSize: 18,
      },
      textTip: {
        fontSize: 12,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="textHead">
          Resonate with the visitor's problem
        </Typography>

        <Typography variant="textCon">
          <p>
            Describe exactly what your product or service does to solve this
            problem. Avoid using verbose words or phrases.
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

          <Button variant="contained" color="black">
            Try for free
          </Button>
        </Box>

        <Typography variant="textTip">
          <p>
            By clicking Sign Up you're confirming that you agree with our{" "}
            <u>Terms and Conditions</u>.
          </p>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Content;
