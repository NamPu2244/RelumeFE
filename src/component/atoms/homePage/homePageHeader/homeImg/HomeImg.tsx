import React from "react";
import imgframe from "/Img/Image.svg";
import { Box } from "@mui/material";

function HomeImg() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <img src={imgframe} className="logo" />
      </Box>
    </div>
  );
}

export default HomeImg;
