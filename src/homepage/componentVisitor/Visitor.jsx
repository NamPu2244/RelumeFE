import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

function Visitor() {
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
        <Typography>
          <div>
            Call to action that invites visitor to try the product for free
          </div>
        </Typography>

        <Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>
        </Typography>

        <div>
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
        </div>

        <Typography>
          <div>
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </div>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Visitor;
