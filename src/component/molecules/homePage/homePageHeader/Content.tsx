import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import TextHeader from "../../../atoms/homePage/homePageHeader/homeContent/contentText/TextHeader";
import TextSubTitle from "../../../atoms/homePage/homePageHeader/homeContent/contentText/TextSubTitle";
import ContentInput from "../../../atoms/homePage/homePageHeader/homeContent/contentInput/ContentInput";
import ContentButton from "../../../atoms/homePage/homePageHeader/homeContent/contentButton/ContentButton";
import TextCaption from "../../../atoms/homePage/homePageHeader/homeContent/contentText/TextCaption";
import TextTerms from "../../../atoms/homePage/homePageHeader/homeContent/contentText/TextTerms";

function Content() {
  return (
    <div>
      <TextHeader />
      <TextSubTitle />

      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
        <ContentInput />
        <ContentButton />
      </Box>

      <TextCaption />
      <TextTerms />
    </div>
  );
}

export default Content;
