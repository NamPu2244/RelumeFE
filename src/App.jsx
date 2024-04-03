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

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <Box sx={{ px: 8 }}>
        <div>
          <Box sx={{ display: "flex", gap: 20, my: 14 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Content />
            </Box>

            <Box>
              <Contentimg />
            </Box>
          </Box>
        </div>

        <div>
          <Box sx={{ display: "flex", justifyContent: "center", my: 14 }}>
            <Grid container spacing={4}>
              <Grid xs={4}>
                <Highlight />
              </Grid>

              <Grid xs={4}>
                <Highlight />
              </Grid>

              <Grid xs={4}>
                <Highlight />
              </Grid>
            </Grid>
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Grid container>
              <grid xs={6}>
                <Box sx={{ mr: 10 }}>
                  <Headline />
                </Box>
              </grid>
              <grid xs={6}>
                <Shortsum />
                <br />

                <Shortsum />
                <br />

                <Shortsum />
                <br />

                <Shortsum />
              </grid>
            </Grid>
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Contentimg />
            <Describe />
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Star />
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Describetwo />
            <Contentimg />
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Star />
          </Box>
        </div>

        <div>
          <Box sx={{ my: 14 }}>
            <Contentimg />
            <Describethree />
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
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 5, my: 14 }}
          >
            <Fequently />
            <Question />
          </Box>
        </div>

        <footer>
          <Box sx={{ my: 14 }}>
            <Footer />
          </Box>
        </footer>

        
      </Box>
    </div>
  );
}

export default App;
