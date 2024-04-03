import { Button, Typography } from "@mui/material";
import React from "react";

function Describetwo() {
  return (
    <div>
      <div>
        <Typography>
          <div>Feature one</div>
        </Typography>

        <Typography>
          <div>Describe benefit of feature two</div>
        </Typography>

        <Typography>
          <div>
            Highlight Unique Selling Proposition (USP) with a short summary of
            the key feature and how it benefits customers.
          </div>
        </Typography>

        <div>
          <Button variant="outlined" color="inherit">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Describetwo;
