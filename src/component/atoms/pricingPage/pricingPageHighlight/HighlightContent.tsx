import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function HighlightContent(props) {

  const {pricingHighlight} = props
  const theme = createTheme({
    typography: {
      h6: {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h6">
              A customer testimonial that highlights features and answers
              potential customer doubts about your product or service. Showcase
              testimonials from a similar demographic to your customers.
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default HighlightContent;
