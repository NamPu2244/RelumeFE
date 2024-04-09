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
      h3: {
        fontSize: 48,
        fontWeight: "bold",
      },
      body2: {
        fontSize: 18,
      },
      caption : {
        fontSize: 12,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3">
                <div>
                  Call to action that invites visitor to <br/> try the product for
                  free
                </div>
              </Typography>

              <Typography variant="body2">
                <Box sx={{ mt: 3 }}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros <br/> elementum tristique.
                  </div>
                </Box>
              </Typography>

              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 357,
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Enter your email"
                      id="fullWidth"
                    />
                  </Box>

                  <Button variant="contained" color="black">
                    Try for free
                  </Button>
                </Box>
              </div>

              <Typography variant="caption">
                <Box sx={{ mt: 2 }}>
                  <div>
                    By clicking Sign Up you're confirming that you agree with
                    our Terms and Conditions.
                  </div>
                </Box>
              </Typography>
            </Box>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Visitor;
