import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function ReviewContent() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      body1: {
        fontSize: 24,
        fontWeight: "bold",
      },
      subtitle2: {
        fontSize: 16,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 16,
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="body1">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              mt: 4,
            }}
          >
            <div>
              "A customer testimonial that highlights features and answers
              potential customer doubts about your product or service. Showcase
              testimonials from a similar demographic to your customers."
            </div>
          </Box>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default ReviewContent;
