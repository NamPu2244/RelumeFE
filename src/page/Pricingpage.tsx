import React, { useMemo } from "react";
import Introduceplans from "../component/pricingpage/plans/Introduceplans";

import Pricingplans from "../component/pricingpage/plans/Pricingplans";
import datapro from "../data/dataplans/datapro";
import { Box } from "@mui/material";
import datahighlightfeat from "../data/dataplans/datahighlightfeat";
import Highlight from "../component/pricingpage/Hightlightfeat/Highlight";
import Tableplans from "../component/pricingpage/tableplans/Tableplans";
import Buttonplans from "../component/pricingpage/plans/Buttonplans";
import Compareplans from "../component/pricingpage/tableplans/Compareplans";

function Pricingpage() {
  const plansEls = useMemo(() => {
    return datapro.map((planS, index) => {
      return <Pricingplans key={index} planS={planS} />;
    });
  }, [datapro]);

  const highEls = useMemo(() => {
    return datahighlightfeat.map((highLight, index) => {
      return <Highlight key={index} highLight={highLight} />;
    });
  }, [datahighlightfeat]);

  return (
    <div>
      <Box sx={{ my: 14 }}>
        <Box sx={{ mb: 12 }}>
          <Introduceplans />
        </Box>

        <Box sx={{ pb: 28 }}>
          <Box sx={{ textAlign: "center", mb: 12 }}>
            <Buttonplans />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {plansEls}
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, pb: 28 }}>
          {highEls}
        </Box>

        <Box>
          <Box sx={{mb:20}}>
            <Compareplans />
          </Box>

          <Tableplans />
        </Box>
      </Box>
    </div>
  );
}

export default Pricingpage;
