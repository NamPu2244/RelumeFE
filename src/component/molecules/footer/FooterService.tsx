import React from "react";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import FooterCredit from "../../atoms/footerBar/footerCredit/FooterCredit";
import FooterPrivacy from "../../atoms/footerBar/footerService/FooterPrivacy";
import FooterTerms from "../../atoms/footerBar/footerService/FooterTerms";
import FooterCookies from "../../atoms/footerBar/footerService/FooterCookies";

function FooterService() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          mt: 4,
        }}
      >
        <FooterCredit />
        <FooterPrivacy />
        <FooterTerms />
        <FooterCookies />
      </Box>
    </div>
  );
}

export default FooterService;
