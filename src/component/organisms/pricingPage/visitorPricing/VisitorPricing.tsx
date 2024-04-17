import React from "react";
import PricingVisitor from "../../../molecules/pricingPage/pricingVisitor/PricingVisitor";
import { Box } from "@mui/material";

function VisitorPricing() {
  return (
    <Box sx={{ pb: 12, px: 28 }}>
      <PricingVisitor />
    </Box>
  );
}

export default VisitorPricing;
