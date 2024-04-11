import React from "react";
import { Box, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
function LinkThree() {
  const navigate = useNavigate();

  const pricingPage = () => {
    navigate("/pricing");
  };
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Typography variant="body2">
        <a onClick={pricingPage}>Link Three</a>
      </Typography>
    </Box>
  );
}

export default LinkThree;
