import React from "react";
import { Box } from "@mui/material";
import Linkin from "/Img/Social/In.svg";

function FooterLinkin() {
  return (
    <div>
      <Box sx={{ cursor: "pointer" }}>
        <img src={Linkin} alt="Linkin" />
      </Box>
    </div>
  );
}

export default FooterLinkin;
