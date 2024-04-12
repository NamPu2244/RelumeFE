import { Box, Grid } from "@mui/material";
import React, { useMemo } from "react";
import Frequently from "../../../molecules/homePage/homePageQuestion/Frequently";
import Question from "../../../molecules/homePage/homePageQuestion/Question";
import { dataFeqQuestion } from "../../../../data/dataplans/dataQuestion";
import Quention from "../../../atoms/homePage/homepageQuestion/Quention";

function HomeQuestion() {
  return (
    <div>
      <Grid container gap={10} justifyContent="center" alignItems="center">
        <Grid xs={4}>
          <Frequently />
        </Grid>

        <Grid xs={6}>
          <Quention/>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeQuestion;
