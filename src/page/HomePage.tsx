import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Content from "../homepage/componentHeader/Content";
import Contentimg from "../homepage/componentHeader/Contentimg";
import Navbar from "../homepage/componentNav/Navbar";
import Highlight from "../homepage/componentHighlight/Highlight";
import Headline from "../homepage/componentShortsum/Headline";
import Shortsum from "../homepage/componentShortsum/Shortsum";
import Describe from "../homepage/componentDescribe/Describe";
import Star from "../homepage/componentStar/Star";
import Describetwo from "../homepage/componentDescribe/Describetwo";
import Describethree from "../homepage/componentDescribe/Describethree";
import Visitor from "../homepage/componentVisitor/Visitor";
import Social from "../homepage/componentVisitor/Social";
import Fequently from "../homepage/componentQuestion/Fequently";
import Question from "../homepage/componentQuestion/Question";
import Footer from "../homepage/componentFooter/Footer";
import datahightlight from "../data/datahightlight";
import datashortsum from "../data/datashortsum";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import dataquestion from "../data/dataquestion";
import React from "react";
import { useMemo } from "react";
import HeaderContent from "../component/organisms/homePage/homeHeader/HeaderContent";
import HighlightOr from "../component/organisms/homePage/homeHighlight/HighlightOr";
import HomeShortSum from "../component/organisms/homePage/homeShortSum/HomeShortSum";
import HomeQuestion from "../component/organisms/homePage/homeQuestion/HomeQuestion";

function HomePage() {
  const hightlightEls = useMemo(() => {
    return datahightlight.map((hightLight, index) => {
      return <Highlight key={index} hightLight={hightLight} />;
    });
  }, [datahightlight]);

  const shortsumEls = useMemo(() => {
    return datashortsum.map((shortSum, index) => {
      return <Shortsum key={index} shortSum={shortSum} />;
    });
  }, [datashortsum]);

  const questionEls = useMemo(() => {
    return dataquestion.map((quesTions, index) => {
      return <Question key={index} quesTions={quesTions} />;
    });
  }, [dataquestion]);
  return (
    <div>
      <Box>
        <div>
          <HeaderContent />
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <HighlightOr />
          </Box>
        </div>

        <div>
          <HomeShortSum />
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid xs={6}>
                <Contentimg />
              </Grid>

              <Grid xs={6}>
                <Describe />
              </Grid>
            </Grid>
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Star />
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid xs={6}>
                <Describetwo />
              </Grid>

              <Grid xs={6}>
                <Contentimg />
              </Grid>
            </Grid>
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Star />
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid xs={6}>
                <Contentimg />
              </Grid>

              <Grid xs={6}>
                <Describethree />
              </Grid>
            </Grid>
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Star />
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Visitor />
            <Social />
          </Box>
        </div>

        <div>
          {/* <Grid container gap={10} justifyContent="center" alignItems="center">
            <Grid xs={4}>
              <Fequently />
            </Grid>

            <Grid xs={6}>{questionEls}</Grid>
          </Grid> */}

          <HomeQuestion />
        </div>
      </Box>
    </div>
  );
}

export default HomePage;
