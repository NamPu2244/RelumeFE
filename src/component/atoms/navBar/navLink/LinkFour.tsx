import React from "react";
import { Box, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function LinkFour() {
  const navigate = useNavigate();

  const pricingPage = () => {
    navigate("/pricing");
  };
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Typography variant="body2">
        <a onClick={pricingPage}>Link Four</a>
      </Typography>
    </Box>
  );
}

export default LinkFour;
