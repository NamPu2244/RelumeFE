import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Typography, Box, createTheme } from "@mui/material";
import ContentCaption from "../../../../atoms/pricingPage/pricingPagePlans/contentHeader/ContentCaption";
import ContentSubtitle from "../../../../atoms/pricingPage/pricingPagePlans/contentHeader/ContentSubtitle";
import ContentHead from "../../../../atoms/pricingPage/pricingPagePlans/contentHeader/ContentHead";

function ContentHeader() {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContentCaption/>
        <ContentHead/>
        <ContentSubtitle/>
      </Box>
    </div>
  );
}

export default ContentHeader;
