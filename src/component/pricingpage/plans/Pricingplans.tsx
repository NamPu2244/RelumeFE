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
import { ThemeProvider, createTheme } from "@mui/material";
import { Padding } from "@mui/icons-material";

function Pricingplans(props) {
  const { planS } = props;

  const theme = createTheme({
    typography: {
      h6: {
        fontSize: 20,
        fontWeight: "bold",
      },
      h3: {
        fontSize: 32,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 16,
      },
    },

  });

  var cardStyle = {
    display: "inline-block",
    width: "416px",
    height: "512px",
    padding:"32px"
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{}}>
          <Card variant="outlined" style={cardStyle} sx={{}}>
            <CardContent>
              <div>
                <Box sx={{ display: "grid", justifyContent: "center" }}>
                  <Box>
                    <Typography textAlign="center" variant="h6">{planS?.titleP}</Typography>
                  </Box>

                  <Box sx={{ my: 2 }}>
                    <Typography textAlign="center" variant="h3">
                      ${planS?.price} /mo
                    </Typography>
                  </Box>

                  <Box>
                    <Typography textAlign="center" variant="subtitle1">
                      or ${planS?.orprice} yearly
                    </Typography>
                  </Box>
                </Box>
              </div>

              <div>
                <Typography>{planS?.feature}</Typography>
              </div>
            </CardContent>

            <CardActions sx={{}}>
              <Button variant="contained" size="medium" style={{width:"100%"}}>
                Get started
              </Button>
            </CardActions>
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Pricingplans;
