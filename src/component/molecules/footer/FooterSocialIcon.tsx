import { Box } from "@mui/material";
import React from "react";
import FooterFacebook from "../../atoms/footerBar/footerSocial/FooterFacebook";
import FooterIg from "../../atoms/footerBar/footerSocial/FooterIg";
import FooterX from "../../atoms/footerBar/footerSocial/FooterX";
import FooterLinkin from "../../atoms/footerBar/footerSocial/FooterLinkin";

function FooterSocialIcon() {
  return (
    <div>
      <Box sx={{ display: "flex", gap: 2 }}>
        <FooterFacebook />
        <FooterIg />
        <FooterX />
        <FooterLinkin />
      </Box>
    </div>
  );
}

export default FooterSocialIcon;
