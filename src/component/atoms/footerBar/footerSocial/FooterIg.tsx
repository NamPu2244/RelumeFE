import React from "react";
import { Box } from "@mui/material";
import Ig from "/Img/Social/Ig.svg";

function FooterIg() {
  return (
    <div>
      <Box sx={{ cursor: "pointer" }}>
        <img src={Ig} alt="Ig" />
      </Box>
    </div>
  );
}

export default FooterIg;
