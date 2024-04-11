import React from "react";
import { Box, Divider, ThemeProvider, createTheme } from "@mui/material";
import NavLogo from "../../atoms/navBar/navLogo/NavLogo";
import NavLink from "../../molecules/navBar/NavLink";
import NavButton from "../../atoms/navBar/navButton/NavButton";

function NavBar() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
        }}
      >
        <NavLogo />
        <NavLink />
        <NavButton />
        
      </Box>
      <Divider></Divider>
    </div>
  );
}

export default NavBar;
