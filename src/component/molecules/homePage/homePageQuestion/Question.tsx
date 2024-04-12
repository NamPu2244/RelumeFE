import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Divider, List, ListItemButton } from "@mui/material";
import React, { useMemo } from "react";
import Answer from "../../../atoms/homePage/homepageQuestion/Answer";
import Questions from "../../../atoms/homePage/homepageQuestion/Questions";
import { dataFeqQuestion } from "../../../../data/dataplans/dataQuestion";

function Question() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const quest = useMemo(() => {
    return dataFeqQuestion.map((ques, index) => (
      <div key={index}>
        <Questions ques={ques.question}/>

      </div>
    ));
  }, [dataFeqQuestion]);
  return (
    <div>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Divider />

        <ListItemButton onClick={handleClick}>
          <Questions/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Answer />
            </ListItemButton>
          </List>
        </Collapse>

        
      </List>
    </div>
  );
}

export default Question;
