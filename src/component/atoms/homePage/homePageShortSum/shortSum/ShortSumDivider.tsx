import React from "react";
import divider from "/Img/Highlight/Divider.svg";
import { Box, Typography } from "@mui/material";

function ShortSumDivider() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={divider} />
      </Box>
    </div>
  );
}

export default ShortSumDivider;
