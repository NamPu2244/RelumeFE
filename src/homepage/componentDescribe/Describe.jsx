import { Button, Typography } from "@mui/material";
import React from "react";

function Describe() {
  return (
    <div>
      <Typography>
        <div>Feature one</div>
      </Typography>

      <Typography>
        <div>Describe benefit of feature one</div>
      </Typography>

      <Typography>
        <div>
          Highlight Unique Selling Proposition (USP) with a short summary of the
          key feature and how it benefits customers.
        </div>
      </Typography>

      <div>
        <Button variant="outlined" color="inherit">Learn more</Button>
      </div>
    </div>
  );
}

export default Describe;
