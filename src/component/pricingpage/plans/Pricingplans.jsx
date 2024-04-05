import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Pricingplans(props) {
  const { planS } = props;
//   const [alignment, setAlignment] = React.useState("m");

//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };
// console.log(planS !== undefined)

if(planS !== undefined)


  return (
    <div>
      {/* <div>
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
      </div> */}


        <Box
          sx={{

          }}
        >
          <Card variant="outlined" sx={{}}>
            <CardContent>
              <div>
                <Box sx={{ display: "grid", justifyContent: "center" }}>
                  <Typography textAlign="center">{planS?.titleP}</Typography>

                  <Typography textAlign="center">{planS?.price}</Typography>

                  <Typography textAlign="center">{planS?.orprice}</Typography>
                </Box>
              </div>

              <div>
                <Typography>{planS?.feature}</Typography>
              </div>
            </CardContent>

            <CardActions>
              <Button variant="contained" size="small">
                Get started
              </Button>
            </CardActions>
          </Card>
        </Box>

    </div>
  );
}

export default Pricingplans;
