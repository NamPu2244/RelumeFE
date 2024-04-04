import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Question() {
  return (
    <div>
      <Box sx={{ display: "grid", gap: 4 }}>
        <Divider></Divider>
        <item>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Question text goes here</Typography>
            <KeyboardArrowDownIcon sx={{cursor:'pointer'}}></KeyboardArrowDownIcon>
          </Box>
        </item>
        <Divider></Divider>
        <item>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Question text goes here</Typography>
            <KeyboardArrowDownIcon sx={{cursor:'pointer'}}></KeyboardArrowDownIcon>
          </Box>{" "}
        </item>{" "}
        <Divider></Divider>
        <item>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Question text goes here</Typography>
            <KeyboardArrowDownIcon sx={{cursor:'pointer'}}></KeyboardArrowDownIcon>
          </Box>{" "}
        </item>{" "}
        <Divider></Divider>
        <item>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Question text goes here</Typography>
            <KeyboardArrowDownIcon sx={{cursor:'pointer'}}></KeyboardArrowDownIcon>
          </Box>{" "}
        </item>{" "}
        <Divider></Divider>
        <item>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Question text goes here</Typography>
            <KeyboardArrowDownIcon sx={{cursor:'pointer'}}></KeyboardArrowDownIcon>
          </Box>{" "}
        </item>{" "}
        <Divider></Divider>
      </Box>
    </div>
  );
}

export default Question;
