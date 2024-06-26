import React from "react";
import highlight from "/Img/Highlight/Vector.svg";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function Highlight(props) {
  const theme = createTheme({
    typography: {
      h5: {
        fontWeight: "bold",
      },
    },
  });

  const { hightLight } = props;
  return (
    <div>
      <Box
        sx={{
          maxWidth: 370,
          height: 226,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ mb: 3 }}>
              <img src="/Img/Highlight/Vector.svg"/>
            </Box>

            <Typography variant="h5">
              <Box sx={{ mb: 3 }}>
                <div>{hightLight.htitle}</div>
              </Box>
            </Typography>

            <Typography variant="body2">
              <div>{hightLight.hcon}</div>
            </Typography>
          </ThemeProvider>
        </div>
      </Box>
    </div>
  );
}

export default Highlight;
