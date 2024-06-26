import React from "react";
import highlight from "/Img/Highlight/Vector.svg";

import { Box, Typography } from "@mui/material";

function ShortSumIcon(props) {
  const {sum} = props;

  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <img src={highlight} />
      </Box>
    </div>
  );
}

export default ShortSumIcon;
