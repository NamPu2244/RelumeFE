import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function VisitorSubCaption() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      subtitle2: {
        fontSize: 16,
      },
    },
  });
  return (
    <div>
      <Typography variant="subtitle2">
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <div>
            Trusted by the world's best companies [social proof to build
            credibility]
          </div>
        </Box>
      </Typography>
    </div>
  );
}

export default VisitorSubCaption;
