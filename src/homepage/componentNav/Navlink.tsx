import { Box, Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navlink() {
  const navigate = useNavigate();

  const pricingPage = () => {
    navigate("/pricing");
  };

  return (
    <div>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Box sx={{cursor:'pointer'}}>
          <Typography variant="body2">
            <a onClick={pricingPage}>Link One</a>
          </Typography>
        </Box>

        <Typography variant="body2">Link Two</Typography>
        <Typography variant="body2">Link Three</Typography>
        <Typography variant="body2">Link Four</Typography>
      </Box>
    </div>
  );
}

export default Navlink;
