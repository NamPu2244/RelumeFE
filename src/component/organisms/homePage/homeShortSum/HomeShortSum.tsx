import { Box, Grid } from "@mui/material";
import React from "react";
import ShortSum from "../../../molecules/homePage/homePageShortSum/ShortSum";
import HeadLine from "../../../molecules/homePage/homePageShortSum/HeadLine";

function HomeShortSum() {
  return (
    <div>
      <Box sx={{ my: 14 }}>
        <Grid container>
          <Grid xs={6}>
            <Box>
              <HeadLine />
            </Box>
          </Grid>

          <Grid xs={6}>
            <Box>
              <ShortSum />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomeShortSum;
