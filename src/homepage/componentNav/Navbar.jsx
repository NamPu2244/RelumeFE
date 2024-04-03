import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Navlink from "./Navlink";
import Navbutton from "./Navbutton";
import Navlogo from "./Navlogo";

function Navbar() {
  const theme = createTheme({
    spacing: 8,
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
            px: 8,
            borderBottom: 1,
          }}
        >
          <Navlogo />
          <Navlink />
          <Navbutton />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Navbar;
