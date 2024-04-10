import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useMemo } from "react";
import { dataFeqQuestion } from "../../../data/dataplans/dataQuestion";

function Question(props) {
  const { dataQues } = props;
  const [open, setOpen] = React.useState(false); // Set initial state to false

  const handleClick = () => {
    setOpen(!open);
  };

  // dataFeqQuestion.map((row) => {
  //   console.log(row);
  // });

  return (
    <div>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Divider />
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={dataQues.question} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={dataQues.answer} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}

export default Question;
