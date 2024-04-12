import React from "react";
import { Box, Typography } from "@mui/material";

function ShortSumBody(props) {
  const {sum} = props;

  return (
    <div>
      <Typography variant="body1">
        <div>
          {sum}
        </div>
      </Typography>
    </div>
  );
}

export default ShortSumBody;
