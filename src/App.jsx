import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";
import Content from "./homepage/componentHeader/Content";
import Contentimg from "./homepage/componentHeader/Contentimg";
import Navbar from "./homepage/componentNav/Navbar";
import Highlight from "./homepage/componentHighlight/Highlight";
import Headline from "./homepage/componentShortsum/Headline";
import Shortsum from "./homepage/componentShortsum/Shortsum";
import Describe from "./homepage/componentDescribe/Describe";
import Star from "./homepage/componentStar/Star";
import Describetwo from "./homepage/componentDescribe/Describetwo";
import Describethree from "./homepage/componentDescribe/Describethree";
import Visitor from "./homepage/componentVisitor/Visitor";
import Social from "./homepage/componentVisitor/Social";
import Fequently from "./homepage/componentQuestion/Fequently";
import Question from "./homepage/componentQuestion/Question";
import Footer from "./homepage/componentFooter/Footer";
import datahightlight from "./data/datahightlight";
import datashortsum from "./data/datashortsum";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const hightlightEls = datahightlight.map((hightLight, index) => {
    return <Highlight key={index} hightLight={hightLight} />;
  });

  const shortsumEls = datashortsum.map((shortSum, index) => {
    return <Shortsum key={index} shortSum={shortSum} />;
  });

  return (
    <div>
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <header>
          <Navbar />
        </header>

        <Box>
          <div>
            <Box sx={{ my: 14 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Content />
                  </Box>
                </Grid>

                <Grid xs={6}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Contentimg />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div>
            <Box sx={{ my: 14 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 5,
                }}
              >
                {hightlightEls}
              </Box>
            </Box>
          </div>

          <div>
            <Box sx={{ my: 14 }}>
              <Grid container>
                <Grid xs={6}>
                  <Box sx={{ mr: 10 }}>
                    <Headline />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateRows: "repeat(3, 1fr)",
                      gap: 5,
                    }}
                  >
                    {shortsumEls}
                  </Box>
                </Grid>
              </Grid>
            </Box>
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
            <Grid container gap={10} justifyContent="center" alignItems="center">
              <Grid xs={4}>
                <Fequently />
              </Grid>

              <Grid xs={6}>
                <Question />
              </Grid>
            </Grid>
          </div>

          <footer>
            <Box sx={{ my: 14 }}>
              <Footer />
            </Box>
          </footer>
        </Box>
      </Container>
    </div>
  );
}

export default App;
