import React from "react";
import Logo from "./Logo";
import Linkf from "./Linkf";
import Social from "./Social";
import { Box, Divider, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            my: 14,
          }}
        >
          <Logo />
          <Linkf />
          <Social />
        </Box>
      </div>

      <div>
        <Box sx={{display:'flex' , justifyContent:'center' , gap:5 , borderTop: 1, boxSizing: "border-box" , mt:10}}>
          <Typography>
            <div>© 2023 Relume. All rights reserved.</div>
          </Typography>

          <Typography>
            <u>Privacy Policy</u>
          </Typography>

          <Typography>
            <u>Terms of Service</u>
          </Typography>

          <Typography>
            <u>Cookies Settings</u>
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default Footer;
