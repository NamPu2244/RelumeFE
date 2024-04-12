import { Box } from "@mui/material";
import React, { useMemo } from "react";
import HeaderContent from "../../organisms/homePage/homeHeader/HeaderContent";
import HighlightOr from "../../organisms/homePage/homeHighlight/HighlightOr";
import datahightlight from "../../../data/datahightlight";
import HighlightBody from "../../atoms/homePage/homePageHighlight/HighlightBody";
import HightHeader from "../../atoms/homePage/homePageHighlight/HightHeader";
import HomeShortSum from "../../organisms/homePage/homeShortSum/HomeShortSum";

function HomePageTem() {
  
  
  return (
    <div>
      <Box>
        <HeaderContent />
      </Box>

      <div>
        <Box sx={{ my: 14 }}>
          <Box>
            <HighlightOr/>
          </Box>
        </Box>
      </div>

      <div>
        <HomeShortSum/>
      </div>
    </div>
  );
}

export default HomePageTem;
