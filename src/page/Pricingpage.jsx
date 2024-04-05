import React from "react";
import Introduceplans from "../component/pricingpage/plans/Introduceplans";

import Pricingplans from "../component/pricingpage/plans/Pricingplans";
import datapro from "../data/dataplans/datapro";
import { Box } from "@mui/material";
import datahighlightfeat from "../data/dataplans/datahighlightfeat";
import Highlight from "../component/pricingpage/Hightlightfeat/Highlight";
import Tableplans from "../component/pricingpage/tableplans/Tableplans";

function Pricingpage() {
  const plansEls = datapro.map((planS, index) => {
    return <Pricingplans key={index} planS={planS} />;
  });

  const highEls = datahighlightfeat.map((highLight, index) => {
    return <Highlight key={index} highLight={highLight} />;
  });

  return (
    <div>
      <Introduceplans />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 5,
        }}
      >
        {plansEls}
      </Box>

      <Box>{highEls}</Box>
      
      <Box><Tableplans/></Box>
    </div>
  );
}

export default Pricingpage;
