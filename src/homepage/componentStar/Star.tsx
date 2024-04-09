import React from "react";
import star from "/Img/Highlight/Stars.svg";
import avatar from "/Img/Highlight/Avatar Image.svg";
import webflow from "/Img/Highlight/Black.svg";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import Contentimg from "../componentHeader/Contentimg";

function Star() {
  const theme = createTheme({
    palette: {
      black: {
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={star} />
            </Box>

            <Typography variant="body1">
              <Box sx={{ display: "flex", justifyContent: "center" , textAlign:'center' , mt:4 }}>
                <div>
                  "A customer testimonial that highlights features and answers
                  potential customer doubts about your product or service.
                  Showcase testimonials from a similar demographic to your
                  customers."
                </div>
              </Box>
            </Typography>

            <div>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4 , mt:4}}>
                <div>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <div>
                      <img src={avatar} />
                    </div>
                    <div>
                      <Typography variant="subtitle2"><div>Customer Name</div></Typography>
                      <Typography variant="subtitle1"><div>Position, Company name</div></Typography>
                    </div>
                  </Box>
                </div>

                <Box sx={{ borderRight: 1, boxSizing: "border-box" }}> </Box>

                <div>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={webflow} />
                  </Box>
                </div>
              </Box>
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Star;
