import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import dataquestion from "../../../../data/dataquestion";

function Quention() {
  const [openState, setOpenState] = React.useState({});

  const handleClick = (index) => {
    setOpenState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      {dataquestion.map((row, index) => (
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          key={index}
        >
          <Divider />
          <ListItemButton onClick={() => handleClick(index)}>
            <ListItemText primary={row.title} />
            {openState[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openState[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={row.content} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      ))}
    </div>
  );
}

export default Quention;
