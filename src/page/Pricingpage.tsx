import React, { useMemo } from "react";
import Introduceplans from "../component/pricingpage/plans/Introduceplans";
import Pricingplans from "../component/pricingpage/plans/Pricingplans";
import { Box } from "@mui/material";
import datahighlightfeat from "../data/dataplans/datahighlightfeat";
import Highlight from "../component/pricingpage/Hightlightfeat/Highlight";
import Tableplans from "../component/pricingpage/tableplans/Tableplans";
import Compareplans from "../component/pricingpage/tableplans/Compareplans";
import HeadQuestion from "../component/pricingpage/Question/HeadQuestion";
import ContectUs from "../component/pricingpage/Question/ContectUs";
import Question from "../component/pricingpage/Question/Question";
import { dataFeqQuestion } from "../data/dataplans/dataQuestion";
import VisitorHead from "../component/pricingpage/VisitorProduct/VisitorHead";
import VisitorBody from "../component/pricingpage/VisitorProduct/VisitorBody";
import VisitorButton from "../component/pricingpage/VisitorProduct/VisitorButton";
import PricingVisitor from "../component/molecules/pricingPage/pricingVisitor/PricingVisitor";
import ContentHeader from "../component/molecules/pricingPage/picingPlans/contentHeader/ContentHeader";
import PricingHighlight from "../component/molecules/pricingPage/pricingHighlight/PricingHighlight";
import Highlights from "../component/organisms/pricingPage/highlightPricing/Highlights";
import QuestionsPricing from "../component/organisms/pricingPage/questionPricing/QuestionsPricing";
import VisitorPricing from "../component/organisms/pricingPage/visitorPricing/VisitorPricing";

function Pricingpage() {
  return (
    <div>
      <Box sx={{ my: 14 }}>
        <Box sx={{ mb: 12 }}>
          <ContentHeader />
        </Box>

        <Box sx={{ pb: 28 }}>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",

              gap: 5,
            }}
          >
            <Pricingplans />
          </Box>
        </Box>

        <Box>
          <Highlights />
        </Box>

        <Box sx={{ pb: 28 }}>
          <Box sx={{ mb: 20 }}>
            <Compareplans />
          </Box>

          <Tableplans />
        </Box>

        <Box>
          <QuestionsPricing />
        </Box>

        <Box>
          <VisitorPricing />
        </Box>
      </Box>
    </div>
  );
}

export default Pricingpage;
