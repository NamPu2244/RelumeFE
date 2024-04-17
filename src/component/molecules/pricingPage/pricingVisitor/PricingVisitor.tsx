import { Box } from "@mui/material";
import React from "react";
import VisitorHeader from "../../../atoms/pricingPage/pricingPageVisitor/VisitorHeader";
import VisitorSubtitle from "../../../atoms/pricingPage/pricingPageVisitor/VisitorSubtitle";
import VisitorButton from "../../../atoms/pricingPage/pricingPageVisitor/VisitorButton";

function PricingVisitor() {
  return (
    <div>
      <Box sx={{ mb: 6 }}>
        <VisitorHeader />
      </Box>
      <Box sx={{ mb: 6 }}>
        <VisitorSubtitle />
      </Box>
      <Box>
        <VisitorButton />
      </Box>
    </div>
  );
}

export default PricingVisitor;
