import React from "react";
import { Box } from "@mui/material";
import Facebook from "/Img/Social/Facebook.svg";

function FooterFacebook() {
  return (
    <div>
      <Box sx={{ cursor: "pointer" }}>
        <img src={Facebook} alt="Facebook" />
      </Box>
    </div>
  );
}

export default FooterFacebook;
