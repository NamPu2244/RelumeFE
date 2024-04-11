import React from "react";
import { Box } from "@mui/material";
import X from "/Img/Social/X.svg";

function FooterX() {
  return (
    <div>
      <Box sx={{ cursor: "pointer" }}>
        <img src={X} alt="X" />
      </Box>
    </div>
  );
}

export default FooterX;
