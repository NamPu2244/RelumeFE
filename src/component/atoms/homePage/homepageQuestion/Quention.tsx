import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
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
