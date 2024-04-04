import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navlink() {
  return (
    <div>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Typography variant="body2">Link One</Typography >
        <Typography variant="body2">Link Two</Typography >
        <Typography variant="body2">Link Three</Typography >
        <Typography variant="body2">Link Four</Typography >
      </Box>
    </div>
  );
}

export default Navlink;
