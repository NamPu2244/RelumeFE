import React from "react";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import FooterLogo from "../../atoms/footerBar/footerLogo/FooterLogo";
import FooterLink from "../../molecules/footer/FooterLink";
import FooterSocialIcon from "../../molecules/footer/FooterSocialIcon";
import FooterService from "../../molecules/footer/FooterService";

function Footer() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 5,
          my: 14,
        }}
      >
        <FooterLogo />
        <FooterLink />
        <FooterSocialIcon />
      </Box>

      <div>
        <Box
          sx={{
            borderTop: 1,
            boxSizing: "border-box",
            mt: 10,
          }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            mt: 4,
          }}
        >
          <FooterService />
        </Box>
      </div>
    </div>
  );
}

export default Footer;
