import { Box, Typography } from "@mui/material";
import React from "react";

function Navlink() {
  return (
    <div>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Typography variant="body2">Linknk One</Typography >
        <Typography variant="body2">Linknk Two</Typography >
        <Typography variant="body2">Linknk Three</Typography >
        <Typography variant="body2">Linknk Four</Typography >
      </Box>
    </div>
  );
}

export default Navlink;
