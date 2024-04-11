import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Content from "../../../molecules/homePage/homePageHeader/Content";
import HomeImg from "../../../atoms/homePage/homePageHeader/homeImg/HomeImg";

function HeaderContent() {
  return (
    <div>
      <Box sx={{ my: 14 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid xs={6}>
            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <Content />
            </Box>
          </Grid>

          <Grid xs={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <HomeImg />
            </Box>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}

export default HeaderContent;
