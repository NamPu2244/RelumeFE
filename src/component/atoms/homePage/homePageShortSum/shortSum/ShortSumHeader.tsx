import React from "react";
import { Box, Typography } from "@mui/material";

function ShortSumHeader(props) {
  const {sum} = props;

  return (
    <div>
      <Typography variant="h5">
        <div>{sum}</div>
      </Typography>
    </div>
  );
}

export default ShortSumHeader;
