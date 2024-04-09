import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

function Highlight(props) {
  const { highLight } = props;

  const theme = createTheme({
    typography: {
      h6: {
        fontSize: 20,
        fontWeight: "bold",
      },
      body2: {
        fontSize: 16,
        fontWeight: "bold",
      },
      caption: {
        fontSize: 16,
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{mb:6}}>
            <img src={highLight.icon} alt="" />
          </Box>

          <Box sx={{mb:6}}>
            <Typography variant="h6">{highLight.content}</Typography>
          </Box>

          <Box sx={{mb:4}}>
            <img src={highLight.profile} alt="" />
          </Box>

          <Box>
            <Typography variant="body2">{highLight.username}</Typography>
          </Box>

          <Box>
            <Typography variant="caption">
              {highLight.position} , {highLight.company}
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Highlight;
