import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Buttonplans from "./Buttonplans";

function Pricingplans(props) {
  const { planS } = props;

  console.log(planS)

  // if (planS !== undefined)

  var cardStyle = {
    display: 'block',
    width: '412px',
    transitionDuration: '0.3s',
    height: '512px'
}
    return (
      <div>
        <Box sx={{}}>
          <Card variant="outlined" style={cardStyle} sx={{}}>
            <CardContent>
              <div>
              <Box sx={{ display: "grid", justifyContent: "center" }}>
                  <Box>
                    <Typography textAlign="center">{planS?.titleP}</Typography>
                  </Box>
                  
                  <Box sx={{my:2}}>
                    <Typography textAlign="center">${planS?.price} /mo</Typography>
                  </Box>
                  
                  <Box>
                    <Typography textAlign="center">or ${planS?.orprice} yearly</Typography>
                  </Box>
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
