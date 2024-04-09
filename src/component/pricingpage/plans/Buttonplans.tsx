import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Buttonplans() {
    const [alignment, setAlignment] = React.useState("m");

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return (
    <div>
      {" "}
      <div>
        <ToggleButtonGroup
          onChange={handleChange}
          exclusive
          value={alignment}
          color="primary"
          aria-label="Platform"
        >
          <ToggleButton value="m">Monthly</ToggleButton>
          <ToggleButton value="y">Yearly</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default Buttonplans;
