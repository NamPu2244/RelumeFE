import { Box } from "@mui/material";
import React from "react";

function Navlink() {
  return (
    <div>
      <Box sx={{ display: "flex", gap: 5 }}>
        <a>Linknk One</a>
        <a>Linknk Two</a>
        <a>Linknk Three</a>
        <a>Linknk Four</a>
      </Box>
    </div>
  );
}

export default Navlink;
