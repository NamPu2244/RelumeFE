import React from "react";
import imgframe from "/Img/Image.svg";
import { Box } from "@mui/material";

function DescribeImg() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <img src={imgframe} className="logo" />
      </Box>
    </div>
  );
}

export default DescribeImg;
