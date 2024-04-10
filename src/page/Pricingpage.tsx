import React, { useMemo } from "react";
import Introduceplans from "../component/pricingpage/plans/Introduceplans";

import Pricingplans from "../component/pricingpage/plans/Pricingplans";
import datapro from "../data/dataplans/datapro";
import { Box } from "@mui/material";
import datahighlightfeat from "../data/dataplans/datahighlightfeat";
import Highlight from "../component/pricingpage/Hightlightfeat/Highlight";
import Tableplans from "../component/pricingpage/tableplans/Tableplans";
import Buttonplans from "../component/pricingpage/plans/Buttonplans";
import Compareplans from "../component/pricingpage/tableplans/Compareplans";
import HeadQuestion from "../component/pricingpage/Question/HeadQuestion";
import ContectUs from "../component/pricingpage/Question/ContectUs";
import Question from "../component/pricingpage/Question/Question";
import { dataFeqQuestion } from "../data/dataplans/dataQuestion";
import VisitorHead from "../component/pricingpage/VisitorProduct/VisitorHead";
import VisitorBody from "../component/pricingpage/VisitorProduct/VisitorBody";
import VisitorButton from "../component/pricingpage/VisitorProduct/VisitorButton";

function Pricingpage() {
  // const plansEls = useMemo(() => {
  //   return datapro.map((planS, index) => {
  //     return <Pricingplans key={index} planS={planS} />;
  //   });
  // }, [datapro]);

  const highEls = useMemo(() => {
    return datahighlightfeat.map((highLight, index) => {
      return <Highlight key={index} highLight={highLight} />;
    });
  }, [datahighlightfeat]);

  const questionEls = useMemo(() => {
    return dataFeqQuestion.map((dataQues, index) => {
      return <Question key={index} dataQues={dataQues} />;
    });
  }, [dataFeqQuestion]);

  return (
    <div>
      <Box sx={{ my: 14 }}>
        <Box sx={{ mb: 12 }}>
          <Introduceplans />
        </Box>

        <Box sx={{ pb: 28 }}>
          

          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              
              gap: 5,
            }}
          >
            <Pricingplans/>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, pb: 28 }}>
          {highEls}
        </Box>

        <Box sx={{ pb: 28 }}>
          <Box sx={{ mb: 20 }}>
            <Compareplans />
          </Box>

          <Tableplans />
        </Box>

        <Box sx={{ display: "grid", justifyContent: "center", px: 28, pb: 28 }}>
          <Box sx={{ mb: 10 }}>
            <HeadQuestion />
          </Box>

          <Box sx={{ mb: 10 }}>{questionEls}</Box>

          <ContectUs />
        </Box>

        <Box sx={{ pb: 12 , px:28 }}>
          <Box sx={{mb:6}}>
            <VisitorHead />
          </Box>
          <Box sx={{mb:6}}>
            <VisitorBody />
          </Box>
          <Box>
            <VisitorButton />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Pricingpage;
