import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material";
import { Padding } from "@mui/icons-material";
import { dataPro } from "../../../data/dataplans/datapro";

function Pricingplans(props) {
  // const { planS } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
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

  // dataPro.map((row) => {
  //   console.log(row.dataFeature);
  // });

  // const orPrices = datapro.map((row) => row.orprice);
  // const Prices = datapro.map((row) => row.price);

  // const [isPrices, setIsPrices] = useState(Prices);
  const [payType, setPayType] = useState("m");

  const handleChange = (event, newAlignment) => {
    // setIsPrices(newAlignment);
    // console.log(newAlignment);
    setPayType(newAlignment);
  };

  var cardStyle = {
    width: "416px",
    height: "512px",
    padding: "32px",
  };

  return (
    <div>
      {/* <Box sx={{display:'flex' , gap:6}}>{isPrices.map((row)=><p>{row}</p>)}</Box> */}
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <div>
            <ToggleButtonGroup
              onChange={handleChange}
              exclusive
              value={payType}
              color="primary"
              aria-label="Platform"
            >
              <ToggleButton value={"m"}>Monthly</ToggleButton>
              <ToggleButton value={"y"}>Yearly</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Box>

        <Box sx={{ display: "flex", gap: 5 }}>
          {dataPro.map((row, index) => (
            <React.Fragment key={row.titleP}>
              <Box>
                <Card
                  variant="outlined"
                  style={cardStyle}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    {" "}
                    <Box sx={{}}>
                      <Box>
                        <Typography textAlign="center" variant="h6">
                          {row.titleP}
                        </Typography>
                      </Box>

                      <Box sx={{ my: 2 }}>
                        <Typography textAlign="center" variant="h3">
                          {payType == "m"
                            ? `$${row.price} /mo`
                            : `$${row.orprice} yearly`}
                        </Typography>
                      </Box>

                      <Box sx={{ mb: 5 }}>
                        <Typography textAlign="center" variant="subtitle1">
                          {payType == "y"
                            ? `or $${row.price} /mo`
                            : `or $${row.orprice} yearly`}
                        </Typography>
                      </Box>
                    </Box>
                    {row.dataFeature.map((data) => (
                      <Box sx={{ mb: 2 }}>
                        <Typography>{data.featureName}</Typography>
                      </Box>
                    ))}
                  </CardContent>

                  <CardActions sx={{ justifyContent: "flex-end" }}>
                    <Button
                      variant="contained"
                      size="medium"
                      color="primary"
                      style={{ width: "100%" }}
                    >
                      Get started
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </React.Fragment>
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Pricingplans;
