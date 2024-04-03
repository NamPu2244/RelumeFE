import React from "react";
import highlight from "/Img/Highlight/Vector.svg";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

function Highlight() {
  const theme = createTheme({
    typography: {
      textHead: {
        fontSize: 24,
        fontWeight: "bold",
      },
      textCon: {
        fontSize: 16,
      },
      textTip: {
        fontSize: 12,
      },
    },
  });
  return (
    <div>
      <Box sx={{ maxWidthdth: 370, height: 226, display: "flex", justifyContent:"center" }}>
        <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ mb: 3 }}>
              <img src={highlight} />
            </Box>

            <Typography variant="textHead">
              <Box sx={{ mb: 3 }}>
                <div>Highlight benefit one</div>
              </Box>
            </Typography>

            <Typography variant="textCon">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </div>
            </Typography>
          </ThemeProvider>
        </div>
      </Box>
    </div>
  );
}

export default Highlight;
