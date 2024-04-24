import React from "react";
import { Box, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function LinkTwo() {
  const navigate = useNavigate();

  const blogPage = () => {
    navigate("/blog");
  };
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Typography variant="body2">
        <a onClick={blogPage}>Link Two</a>
      </Typography>
    </Box>
  );
}

export default LinkTwo;
