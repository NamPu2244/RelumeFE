import React, { useMemo } from "react";
import ShortSumIcon from "../../../atoms/homePage/homePageShortSum/shortSum/ShortSumIcon";
import ShortSumDivider from "../../../atoms/homePage/homePageShortSum/shortSum/ShortSumDivider";
import ShortSumHeader from "../../../atoms/homePage/homePageShortSum/shortSum/ShortSumHeader";
import ShortSumBody from "../../../atoms/homePage/homePageShortSum/shortSum/ShortSumBody";
import { Box } from "@mui/material";
import datashortsum from "../../../../data/datashortsum";

function ShortSum() {
  const summary = useMemo(() => {
    return datashortsum.map((sum, index) => (
      <div key={index}>
        <Box sx={{ display: "flex", gap: 5 }}>
          <div>
            <ShortSumIcon />
            <ShortSumDivider />
          </div>

          <div>
            <ShortSumHeader sum={sum.Stitle} />
            <ShortSumBody sum={sum.Scon} />
          </div>
        </Box>
      </div>
    ));
  }, [datashortsum]);
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 5,
        }}
      >
        {summary}
      </Box>
    </div>
  );
}

export default ShortSum;
