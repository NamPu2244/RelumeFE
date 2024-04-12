import React, { useMemo } from "react";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import HighlightBody from "../../../atoms/homePage/homePageHighlight/HighlightBody";
import HighlightIcon from "../../../atoms/homePage/homePageHighlight/HighlightIcon";
import HightHeader from "../../../atoms/homePage/homePageHighlight/HightHeader";
import datahightlight from "../../../../data/datahightlight";

function Highlight() {
  const highlightEls = useMemo(() => {
    return datahightlight.map((high, index) => (
      <div key={index}>
        <Box
          sx={{
            maxWidth: 370,
            height: 226,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <HighlightIcon />
            <HightHeader high={high.htitle} />
            <HighlightBody high={high.hcon} />
          </div>
        </Box>
      </div>
    ));
  }, [datahightlight]);

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 5,
          justifyContent: "center",
        }}
      >
        {highlightEls}
      </Box>
    </div>
  );
}

export default Highlight;
