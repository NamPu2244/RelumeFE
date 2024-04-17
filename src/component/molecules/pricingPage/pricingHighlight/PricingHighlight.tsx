import React, { useMemo } from "react";
import HighlightIcon from "../../../atoms/pricingPage/pricingPageHighlight/HighlightIcon";
import HighlightContent from "../../../atoms/pricingPage/pricingPageHighlight/HighlightContent";
import CustomerImg from "../../../atoms/pricingPage/pricingPageHighlight/CustomerImg";
import CustomerName from "../../../atoms/pricingPage/pricingPageHighlight/CustomerName";
import CustomerPosition from "../../../atoms/pricingPage/pricingPageHighlight/CustomerPosition";
import datahighlightfeat from "../../../../data/dataplans/datahighlightfeat";
import { Box } from "@mui/material";

function PricingHighlight() {
  const highlight = useMemo(() => {
    return datahighlightfeat.map((pricingHighlight, index) => (
      <div key={index}>
        <HighlightIcon pricingHighlight={pricingHighlight.icon} />
        <HighlightContent pricingHighlight={pricingHighlight.content} />
        <CustomerImg pricingHighlight={pricingHighlight.profile} />
        <CustomerName pricingHighlight={pricingHighlight.username} />
        <CustomerPosition pricingHighlight={pricingHighlight.position} />
      </div>
    ));
  }, [datahighlightfeat]);

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 5, pb: 28 }}>
        {highlight}
      </Box>
    </div>
  );
}

export default PricingHighlight;
