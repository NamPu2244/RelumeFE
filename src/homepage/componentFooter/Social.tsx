import { Box } from "@mui/material";
import React from "react";
import Facebook from "/Img/Social/Facebook.svg";
import Ig from "/Img/Social/Ig.svg";
import X from "/Img/Social/X.svg";
import Linkin from "/Img/Social/In.svg";

function Social() {
  return (
    <div>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ cursor: "pointer" }}>
          <img src={Facebook} alt="Facebook" />
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          <img src={Ig} alt="Ig" />
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          {" "}
          <img src={X} alt="X" />
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          {" "}
          <img src={Linkin} alt="Linkin" />
        </Box>
      </Box>
    </div>
  );
}

export default Social;
