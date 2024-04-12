import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ShortCaption from "../../../atoms/homePage/homePageShortSum/shortContent/ShortCaption";
import ShortHeader from "../../../atoms/homePage/homePageShortSum/shortContent/ShortHeader";
import ShortButton from "../../../atoms/homePage/homePageShortSum/shortContent/ShortButton";

function HeadLine() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {},
  });
  return (
    <div>
      <ShortCaption />
      <ShortHeader />
      <ShortButton />
    </div>
  );
}

export default HeadLine;
